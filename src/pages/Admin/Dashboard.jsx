import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import {
  FiUser,
  FiCalendar,
  FiUsers,
  FiList,
  FiXCircle,
  FiCheckCircle,
  FiAlertCircle,
} from 'react-icons/fi'

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } =
    useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  if (!dashData) return null

  return (
    <div className="relative m-4 sm:m-6 md:m-8 bg-[#F1FAEE] rounded-3xl px-4 sm:px-6 lg:px-8 py-6 md:py-8 shadow-lg border border-[#A8DADC]/40 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-16 w-56 h-56 bg-[#A8DADC] opacity-30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-64 h-64 bg-[#457B9D] opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-[#1D3557]">
              Admin Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-[#1D3557]/75 mt-1">
              Overview of doctors, patients, and recent bookings.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#A8DADC]/60 text-[11px] text-[#1D3557]/80">
            <FiAlertCircle className="text-[#457B9D] text-sm" />
            <span>Data auto-refreshes when you sign in</span>
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {/* Doctors */}
          <div className="flex items-center gap-3 bg-white/90 p-4 rounded-2xl border border-[#A8DADC]/60 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all cursor-default">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8DADC]/25 border border-[#A8DADC]/70">
              <FiUser className="text-xl text-[#457B9D]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1D3557]">
                {dashData.doctors}
              </p>
              <p className="text-xs text-[#1D3557]/70 mt-0.5">Total Doctors</p>
            </div>
          </div>

          {/* Appointments */}
          <div className="flex items-center gap-3 bg-white/90 p-4 rounded-2xl border border-[#A8DADC]/60 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all cursor-default">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8DADC]/25 border border-[#A8DADC]/70">
              <FiCalendar className="text-xl text-[#457B9D]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1D3557]">
                {dashData.appointments}
              </p>
              <p className="text-xs text-[#1D3557]/70 mt-0.5">Appointments</p>
            </div>
          </div>

          {/* Patients */}
          <div className="flex items-center gap-3 bg-white/90 p-4 rounded-2xl border border-[#A8DADC]/60 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all cursor-default">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8DADC]/25 border border-[#A8DADC]/70">
              <FiUsers className="text-xl text-[#457B9D]" />
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1D3557]">
                {dashData.patients}
              </p>
              <p className="text-xs text-[#1D3557]/70 mt-0.5">Patients</p>
            </div>
          </div>
        </div>

        {/* Latest bookings */}
        <div className="bg-white/92 rounded-2xl overflow-hidden shadow-md border border-[#A8DADC]/60">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b border-[#A8DADC]/60 bg-[#F1FAEE]/70">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A8DADC]/30 border border-[#A8DADC]/70">
              <FiList className="text-[#457B9D]" />
            </div>
            <div>
              <p className="font-semibold text-[#1D3557] text-base sm:text-lg">
                Latest Bookings
              </p>
              <p className="text-[11px] text-[#1D3557]/70">
                Recent appointments across all doctors
              </p>
            </div>
          </div>

          {/* List */}
          <div className="divide-y divide-[#A8DADC]/40">
            {dashData.latestAppointments.slice(0, 5).map((item, index) => {
              const statusNode = item.cancelled ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#FEE2E2] text-[#B91C1C] border border-[#FCA5A5]">
                  <FiXCircle className="text-[12px]" />
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#DCFCE7] text-[#166534] border border-[#86EFAC]">
                  <FiCheckCircle className="text-[12px]" />
                  Completed
                </span>
              ) : (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#F1FAEE] text-[#B91C1C] border border-[#FCA5A5] hover:bg-[#FEE2E2] transition-all"
                >
                  <FiXCircle className="text-[12px]" />
                  Cancel booking
                </button>
              )

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 py-3 gap-3 sm:gap-4 hover:bg-[#A8DADC]/10 transition-all"
                >
                  {/* Doctor image */}
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-10 h-10 object-cover border border-[#A8DADC]/70"
                      src={item.docData.image}
                      alt={item.docData.name}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-xs sm:text-sm text-[#1D3557]/85">
                    <p className="font-semibold text-[#1D3557]">
                      {item.docData.name}
                    </p>
                    <p className="text-[11px] text-[#1D3557]/70">
                      Booking on {slotDateFormat(item.slotDate)}
                    </p>
                    {item.userData?.name && (
                      <p className="text-[11px] text-[#1D3557]/65 mt-0.5">
                        Patient: {item.userData.name}
                      </p>
                    )}
                  </div>

                  {/* Status / Action */}
                  <div className="sm:ml-auto">{statusNode}</div>
                </div>
              )
            })}

            {dashData.latestAppointments.length === 0 && (
              <p className="px-6 py-4 text-xs sm:text-sm text-[#1D3557]/70">
                No bookings yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
