import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { FiUser, FiCheckCircle, FiXCircle } from 'react-icons/fi'

const DoctorsList = () => {
  const { doctors, changeAvailability, aToken, getAllDoctors } =
    useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="relative w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 my-6 text-[#1D3557]">
      {/* Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-[#1D3557]">
            All Doctors
          </h1>
          <p className="text-xs sm:text-sm text-[#1D3557]/70 mt-1">
            Manage doctor profiles and availability.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1FAEE] border border-[#A8DADC]/70 text-[11px] text-[#1D3557]/80">
          <FiUser className="text-[#457B9D]" />
          <span>Total: {doctors.length}</span>
        </div>
      </div>

      {/* Cards container */}
      <div className="bg-[#F1FAEE]/90 border border-[#A8DADC]/60 rounded-3xl px-4 sm:px-5 lg:px-6 py-5 shadow-md max-h-[78vh] overflow-y-auto">
        {doctors.length === 0 ? (
          <p className="text-xs sm:text-sm text-[#1D3557]/70">
            No doctors added yet.
          </p>
        ) : (
          <div className="w-full flex flex-wrap gap-4 pt-1 gap-y-5">
            {doctors.map((item, index) => {
              const isAvailable = item.available

              return (
                <div
                  key={index}
                  className="w-full sm:w-[240px] md:w-[260px] lg:w-[270px] border border-[#A8DADC]/70 rounded-2xl overflow-hidden bg-white/90 shadow-sm hover:shadow-md hover:-translate-y-[2px] transition-all cursor-default group"
                >
                  {/* Doctor Image */}
                  <div className="relative">
                    <img
                      className="w-full h-40 object-cover bg-[#E8F6F3] group-hover:opacity-95 transition-opacity"
                      src={item.image}
                      alt={item.name}
                    />

                    {/* Availability pill on image */}
                    <div className="absolute top-2 left-2">
                      {isAvailable ? (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]">
                          <FiCheckCircle className="text-[12px]" />
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]">
                          <FiXCircle className="text-[12px]" />
                          Unavailable
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-4 flex flex-col gap-2">
                    <div>
                      <p className="text-[#1D3557] text-base font-semibold">
                        {item.name}
                      </p>
                      <p className="text-[#1D3557]/70 text-xs mt-0.5">
                        {item.speciality}
                      </p>
                    </div>

                    {/* Optional: experience if exists */}
                    {item.experience && (
                      <p className="text-[11px] text-[#1D3557]/65">
                        Experience: {item.experience}
                      </p>
                    )}

                    {/* Availability Toggle */}
                    <div className="mt-2 flex items-center justify-between gap-2 text-xs">
                      <span className="text-[#1D3557]/70">Set availability</span>

                      <label className="inline-flex items-center gap-2 cursor-pointer">
                        <span className="text-[11px] text-[#1D3557]/80">
                          {isAvailable ? 'On' : 'Off'}
                        </span>
                        {/* Hidden checkbox + custom toggle */}
                        <input
                          type="checkbox"
                          checked={isAvailable}
                          onChange={() => changeAvailability(item._id)}
                          className="hidden"
                        />
                        <span
                          className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                            isAvailable ? 'bg-[#22c55e]' : 'bg-[#cbd5f5]'
                          }`}
                        >
                          <span
                            className={`absolute h-4 w-4 rounded-full bg-white shadow-sm transform transition-transform ${
                              isAvailable ? 'translate-x-4' : 'translate-x-0.5'
                            }`}
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default DoctorsList
