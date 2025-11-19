import React, { useContext, useEffect, useState } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FiMapPin, FiEdit2, FiCheckCircle, FiXCircle } from 'react-icons/fi'

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData } =
    useContext(DoctorContext)
  const { currency, backendUrl } = useContext(AppContext)
  const [isEdit, setIsEdit] = useState(false)
  const [saving, setSaving] = useState(false)

  const updateProfile = async () => {
    try {
      setSaving(true)

      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        about: profileData.about,
        available: profileData.available,
      }

      const { data } = await axios.post(
        backendUrl + '/api/doctor/update-profile',
        updateData,
        { headers: { dToken } }
      )

      if (data.success) {
        toast.success(data.message)
        setIsEdit(false)
        getProfileData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    } finally {
      setSaving(false)
    }
  }

  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])

  if (!profileData) return null

  return (
    <div className="relative px-4 sm:px-6 md:px-8 mt-8 mb-10">
      {/* Background wrapper */}
      <div className="bg-[#F1FAEE] rounded-3xl border border-[#A8DADC]/60 shadow-lg p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#A8DADC] opacity-30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-0 w-56 h-56 bg-[#457B9D] opacity-25 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
          {/* Header + Edit toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-xs sm:text-sm text-[#1D3557]/70 mb-1">
                Doctor Profile
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#1D3557] flex items-center gap-2">
                {profileData.name}
                <span className="px-2 py-0.5 text-[11px] rounded-full bg-white/80 border border-[#A8DADC]/70 text-[#457B9D]">
                  {profileData.speciality}
                </span>
              </h1>
            </div>

            <div className="flex gap-2 justify-start sm:justify-end">
              {isEdit ? (
                <>
                  <button
                    type="button"
                    disabled={saving}
                    onClick={updateProfile}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs sm:text-sm bg-gradient-to-r from-[#457B9D] to-[#1D3557] text-white shadow-md hover:shadow-lg hover:translate-y-[1px] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <FiCheckCircle className="text-[14px]" />
                    {saving ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEdit(false)
                      getProfileData()
                    }}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs sm:text-sm border border-[#A8DADC] bg-white/80 text-[#1D3557] hover:bg-[#A8DADC]/20 transition-all"
                  >
                    <FiXCircle className="text-[14px]" />
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEdit(true)}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs sm:text-sm border border-[#457B9D] bg-white/90 text-[#1D3557] shadow-sm hover:bg-[#A8DADC]/30 hover:shadow-md transition-all"
                >
                  <FiEdit2 className="text-[14px]" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Main content: image + info card */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left: Image */}
            <div className="w-full lg:max-w-xs flex justify-center lg:justify-start">
              <img
                className="w-full max-w-xs rounded-2xl border border-[#A8DADC]/70 bg-[#E8F6F3] shadow-md object-cover"
                src={profileData.image}
                alt={profileData.name}
              />
            </div>

            {/* Right: Info card */}
            <div className="flex-1 bg-white/90 rounded-2xl border border-[#A8DADC]/60 shadow-md p-5 sm:p-6 space-y-5">
              {/* Degree + Experience */}
              <div>
                <p className="text-sm text-[#1D3557]/80">
                  {profileData.degree} &mdash; {profileData.speciality}
                </p>
                <p className="mt-1 inline-flex items-center px-3 py-1 rounded-full text-[11px] bg-[#F1FAEE] border border-[#A8DADC]/70 text-[#1D3557]">
                  {profileData.experience}
                </p>
              </div>

              {/* About */}
              <div>
                <p className="flex items-center gap-1 text-sm font-semibold text-[#1D3557] mb-1">
                  About
                </p>
                {isEdit ? (
                  <textarea
                    onChange={(e) =>
                      setProfileData((prev) => ({
                        ...prev,
                        about: e.target.value,
                      }))
                    }
                    value={profileData.about}
                    rows={5}
                    className="w-full border border-[#A8DADC]/80 rounded-lg px-3 py-2 text-sm text-[#1D3557] bg-white/90 outline-none focus:border-[#457B9D] focus:ring-1 focus:ring-[#A8DADC]"
                    placeholder="Write something about your experience, specialization, and approach to patients."
                  />
                ) : (
                  <p className="text-sm text-[#1D3557]/80 leading-relaxed max-w-[700px]">
                    {profileData.about}
                  </p>
                )}
              </div>

              {/* Fees */}
              <div>
                <p className="text-sm font-semibold text-[#1D3557] mb-1">
                  Appointment Fee
                </p>
                {isEdit ? (
                  <div className="inline-flex items-center gap-2 border border-[#A8DADC]/80 rounded-lg px-3 py-1.5 bg-white/90">
                    <span className="text-sm text-[#1D3557]">
                      {currency}
                    </span>
                    <input
                      type="number"
                      value={profileData.fees}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          fees: e.target.value,
                        }))
                      }
                      className="w-24 bg-transparent text-sm outline-none text-[#1D3557]"
                      min={0}
                    />
                  </div>
                ) : (
                  <p className="text-sm text-[#1D3557]/90">
                    {currency}{' '}
                    <span className="font-semibold">
                      {profileData.fees}
                    </span>
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiMapPin className="text-[#94a3b8]" />
                  <p className="text-sm font-semibold text-[#1D3557]">
                    Clinic Address
                  </p>
                </div>
                {isEdit ? (
                  <div className="flex flex-col gap-1 text-sm">
                    <input
                      type="text"
                      value={profileData.address.line1}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line1: e.target.value,
                          },
                        }))
                      }
                      className="border border-[#A8DADC]/80 rounded-lg px-3 py-1.5 bg-white/90 outline-none focus:border-[#457B9D] focus:ring-1 focus:ring-[#A8DADC]"
                      placeholder="Address line 1"
                    />
                    <input
                      type="text"
                      value={profileData.address.line2}
                      onChange={(e) =>
                        setProfileData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line2: e.target.value,
                          },
                        }))
                      }
                      className="border border-[#A8DADC]/80 rounded-lg px-3 py-1.5 bg-white/90 outline-none focus:border-[#457B9D] focus:ring-1 focus:ring-[#A8DADC]"
                      placeholder="Address line 2"
                    />
                  </div>
                ) : (
                  <p className="text-sm text-[#1D3557]/75">
                    {profileData.address.line1}
                    <br />
                    {profileData.address.line2}
                  </p>
                )}
              </div>

              {/* Availability toggle */}
              <div className="pt-1">
                <p className="text-sm font-semibold text-[#1D3557] mb-1">
                  Availability
                </p>
                <div className="flex items-center gap-3">
                  <label className="inline-flex items-center gap-2 cursor-pointer">
                    <span className="text-xs text-[#1D3557]/75">
                      {profileData.available ? 'Available' : 'Unavailable'}
                    </span>
                    {/* Only allow toggle in edit mode */}
                    <div
                      onClick={() =>
                        isEdit &&
                        setProfileData((prev) => ({
                          ...prev,
                          available: !prev.available,
                        }))
                      }
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                        profileData.available
                          ? 'bg-[#22c55e]'
                          : 'bg-[#cbd5f5]'
                      } ${isEdit ? '' : 'opacity-70 cursor-not-allowed'}`}
                    >
                      <span
                        className={`absolute h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform ${
                          profileData.available
                            ? 'translate-x-4'
                            : 'translate-x-0.5'
                        }`}
                      />
                    </div>
                  </label>
                  {!isEdit && (
                    <p className="text-[11px] text-[#1D3557]/60">
                      Enable edit mode to change availability.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
