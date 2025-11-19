import React, { useEffect, useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import {
  FiXCircle,
  FiUser,
  FiCalendar,
  FiUserCheck,
  FiDollarSign,
} from 'react-icons/fi'

const AllAppointments = () => {
  const { aToken, appointments, cancelAppointment, getAllAppointments } =
    useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className="relative w-full max-w-6xl mx-4 sm:mx-6 md:mx-8 my-6 text-[#1D3557]">
      {/* Header */}
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <p className="text-xl sm:text-2xl font-semibold text-[#1D3557]">
            All Appointments
          </p>
          <p className="text-xs sm:text-sm text-[#1D3557]/70 mt-1">
            View and manage all bookings across the platform.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1FAEE] border border-[#A8DADC]/70 text-[11px] text-[#1D3557]/80">
          <FiCalendar className="text-[#457B9D]" />
          <span>Total: {appointments.length}</span>
        </div>
      </div>

      {/* Table container */}
      <div className="bg-[#F1FAEE]/90 border border-[#A8DADC]/60 rounded-2xl text-sm max-h-[75vh] overflow-y-auto shadow-md backdrop-blur-sm">
        {/* Header row (desktop) */}
        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1.4fr] py-3 px-6 border-b border-[#A8DADC]/60 bg-white/80 text-[#1D3557] font-semibold text-xs uppercase tracking-wide">
          <p>#</p>
          <p className="flex items-center gap-1">
            <FiUser className="text-[#457B9D]" /> Patient
          </p>
          <p>Age</p>
          <p>Date &amp; Time</p>
          <p className="flex items-center gap-1">
            <FiUserCheck className="text-[#457B9D]" /> Doctor
          </p>
          <p className="flex items-center gap-1">
            <FiDollarSign className="text-[#457B9D]" /> Fees
          </p>
          <p>Action</p>
        </div>

        {/* Rows */}
        {appointments.map((item, index) => {
          const age = calculateAge(item.userData.dob)
          const formattedDate = slotDateFormat(item.slotDate)

          const isCancelled = item.cancelled
          const isCompleted = item.isCompleted

          const statusNode = isCancelled ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#FEE2E2] text-[#B91C1C] border border-[#FCA5A5]">
              <FiXCircle className="text-[12px]" />
              Cancelled
            </span>
          ) : isCompleted ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]">
              Completed
            </span>
          ) : (
            <button
              onClick={() => cancelAppointment(item._id)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#F1FAEE] text-[#B91C1C] border border-[#FCA5A5] hover:bg-[#FEE2E2] transition-all"
            >
              <FiXCircle className="text-[12px]" />
              Cancel
            </button>
          )

          return (
            <div
              key={index}
              className="flex flex-wrap justify-between gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1.4fr] items-center py-3 px-6 border-b border-[#A8DADC]/40 text-[#1D3557]/90 hover:bg-[#A8DADC]/10 transition-all"
            >
              {/* Index (desktop only) */}
              <p className="max-sm:hidden text-xs text-[#1D3557]/70">
                {index + 1}
              </p>

              {/* Patient */}
              <div className="flex items-center gap-2 min-w-[140px]">
                <img
                  src={item.userData.image}
                  className="w-8 h-8 rounded-full object-cover border border-[#A8DADC]/70"
                  alt={item.userData.name}
                />
                <div className="text-xs sm:text-sm">
                  <p className="font-medium text-[#1D3557]">
                    {item.userData.name}
                  </p>
                  <p className="sm:hidden text-[11px] text-[#1D3557]/65">
                    Age: {age}
                  </p>
                </div>
              </div>

              {/* Age (desktop) */}
              <p className="max-sm:hidden text-xs sm:text-sm">{age}</p>

              {/* Date & Time */}
              <p className="text-xs sm:text-sm min-w-[150px]">
                {formattedDate}, {item.slotTime}
              </p>

              {/* Doctor */}
              <div className="flex items-center gap-2 min-w-[150px]">
                <img
                  src={item.docData.image}
                  className="w-8 h-8 rounded-full object-cover border border-[#A8DADC]/70"
                  alt={item.docData.name}
                />
                <p className="text-xs sm:text-sm">{item.docData.name}</p>
              </div>

              {/* Fees */}
              <p className="text-xs sm:text-sm">
                {currency}
                {item.amount}
              </p>

              {/* Action / Status */}
              <div className="flex sm:justify-end">{statusNode}</div>
            </div>
          )
        })}

        {appointments.length === 0 && (
          <p className="px-6 py-4 text-xs sm:text-sm text-[#1D3557]/70">
            No appointments found.
          </p>
        )}
      </div>
    </div>
  )
}

export default AllAppointments
