import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import {
  FiUpload,
  FiUser,
  FiMail,
  FiLock,
  FiBriefcase,
  FiDollarSign,
  FiMapPin,
  FiInfo,
} from 'react-icons/fi'

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl } = useContext(AppContext)
  const { aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      if (!docImg) {
        return toast.error('Image Not Selected')
      }

      const formData = new FormData()

      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append(
        'address',
        JSON.stringify({ line1: address1, line2: address2 })
      )

      const { data } = await axios.post(
        backendUrl + '/api/admin/add-doctor',
        formData,
        { headers: { aToken } }
      )

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="relative w-full flex justify-center px-4 sm:px-6 md:px-8 mt-8 mb-10"
    >
      <div className="w-full max-w-5xl bg-[#F1FAEE] rounded-3xl border border-[#A8DADC]/50 shadow-lg px-4 sm:px-6 lg:px-10 py-8 md:py-10 overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#A8DADC] opacity-30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-0 w-56 h-56 bg-[#457B9D] opacity-25 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D3557]">
              Add Doctor
            </h2>
            <p className="text-xs sm:text-sm text-[#1D3557]/75">
              Create a new doctor profile to make them available for bookings.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white/85 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-6 border border-[#A8DADC]/60 rounded-2xl shadow-md max-h-[75vh] overflow-y-auto">
            {/* Upload */}
            <div className="flex items-center gap-4 mb-8">
              <label htmlFor="doc-img" className="cursor-pointer relative">
                <img
                  className="w-16 h-16 rounded-full border-2 border-[#A8DADC] object-cover bg-[#E8F6F3]"
                  src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
                  alt="upload"
                />
                <div className="absolute -bottom-1 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-[#457B9D] shadow-md">
                  <FiUpload className="text-white text-sm" />
                </div>
              </label>
              <input
                onChange={(e) => setDocImg(e.target.files[0])}
                type="file"
                id="doc-img"
                hidden
              />
              <p className="text-xs sm:text-sm text-[#1D3557]/80">
                Upload doctor picture<br />
                <span className="text-[11px] text-[#1D3557]/60">
                  Recommended: square image, clear face.
                </span>
              </p>
            </div>

            {/* Form body */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Left column */}
              <div className="w-full lg:flex-1 flex flex-col gap-4">
                <Input
                  icon={<FiUser className="text-[#94a3b8]" />}
                  label="Doctor Name"
                  value={name}
                  setValue={setName}
                  placeholder="Enter full name"
                />

                <Input
                  icon={<FiMail className="text-[#94a3b8]" />}
                  label="Doctor Email"
                  type="email"
                  value={email}
                  setValue={setEmail}
                  placeholder="name@example.com"
                />

                <Input
                  icon={<FiLock className="text-[#94a3b8]" />}
                  label="Set Password"
                  type="password"
                  value={password}
                  setValue={setPassword}
                  placeholder="Create login password"
                />

                <Select
                  icon={<FiBriefcase className="text-[#94a3b8]" />}
                  label="Experience"
                  value={experience}
                  setValue={setExperience}
                >
                  {[
                    '1 Year',
                    '2 Year',
                    '3 Year',
                    '4 Year',
                    '5 Year',
                    '6 Year',
                    '8 Year',
                    '9 Year',
                    '10 Year',
                  ].map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </Select>

                <Input
                  icon={<FiDollarSign className="text-[#94a3b8]" />}
                  label="Fees"
                  type="number"
                  value={fees}
                  setValue={setFees}
                  placeholder="Consultation fees"
                />
              </div>

              {/* Right column */}
              <div className="w-full lg:flex-1 flex flex-col gap-4">
                <Select
                  icon={<FiBriefcase className="text-[#94a3b8]" />}
                  label="Speciality"
                  value={speciality}
                  setValue={setSpeciality}
                >
                  {[
                    'General physician',
                    'Gynecologist',
                    'Dermatologist',
                    'Pediatricians',
                    'Neurologist',
                    'Gastroenterologist',
                  ].map((sp) => (
                    <option key={sp}>{sp}</option>
                  ))}
                </Select>

                <Input
                  icon={<FiInfo className="text-[#94a3b8]" />}
                  label="Degree"
                  value={degree}
                  setValue={setDegree}
                  placeholder="e.g. MBBS, MD"
                />

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm text-[#1D3557]">
                    <FiMapPin className="text-[#94a3b8]" />
                    <p>Address</p>
                  </div>
                  <input
                    onChange={(e) => setAddress1(e.target.value)}
                    value={address1}
                    className="border border-[#A8DADC] rounded-lg px-3 py-2 bg-white/80 text-sm outline-none focus:border-[#457B9D] focus:ring-1 focus:ring-[#A8DADC]"
                    placeholder="Clinic / Hospital address line 1"
                    required
                  />
                  <input
                    onChange={(e) => setAddress2(e.target.value)}
                    value={address2}
                    className="border border-[#A8DADC] rounded-lg px-3 py-2 bg-white/80 text-sm outline-none focus:border-[#457B9D] focus:ring-1 focus:ring-[#A8DADC]"
                    placeholder="Address line 2"
                    required
                  />
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-1">
                <FiInfo className="text-[#94a3b8]" />
                <p className="text-sm text-[#1D3557]">About Doctor</p>
              </div>
              <textarea
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                className="w-full px-3 sm:px-4 pt-2 border border-[#A8DADC] rounded-lg bg-white/80 text-sm outline-none focus:border-[#457B9D] focus:ring-1 focus:ring-[#A8DADC]"
                rows={5}
                placeholder="Short bio, expertise, approach to patients..."
              />
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#457B9D] to-[#1D3557] hover:shadow-lg hover:translate-y-[1px] transition-all text-white font-medium px-10 py-2.5 rounded-full text-sm"
              >
                Add Doctor
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

const Input = ({ label, value, setValue, placeholder, type = 'text', icon }) => (
  <div className="flex flex-col gap-1">
    <p className="text-sm text-[#1D3557]">{label}</p>
    <div className="flex items-center gap-2 border border-[#A8DADC] rounded-lg px-3 py-2 bg-white/80 focus-within:border-[#457B9D] focus-within:ring-1 focus-within:ring-[#A8DADC]">
      {icon && <span className="text-sm">{icon}</span>}
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 bg-transparent text-sm outline-none text-[#1D3557]"
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  </div>
)

const Select = ({ label, value, setValue, children, icon }) => (
  <div className="flex flex-col gap-1">
    <p className="text-sm text-[#1D3557]">{label}</p>
    <div className="flex items-center gap-2 border border-[#A8DADC] rounded-lg px-3 py-2 bg-white/80 focus-within:border-[#457B9D] focus-within:ring-1 focus-within:ring-[#A8DADC]">
      {icon && <span className="text-sm">{icon}</span>}
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 bg-transparent text-sm outline-none text-[#1D3557]"
      >
        {children}
      </select>
    </div>
  </div>
)

export default AddDoctor
