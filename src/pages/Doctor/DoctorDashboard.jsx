import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import {
  FiTrendingUp,
  FiCalendar,
  FiUsers,
  FiList,
  FiXCircle,
  FiCheckCircle,
} from 'react-icons/fi'

const DoctorDashboard = () => {
  const {
    dToken,
    dashData,
    getDashData,
    cancelAppointment,
    completeAppointment,
  } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) getDashData()
  }, [dToken])

  if (!dashData) return null

  return (
    <div className="relative p-4 sm:p-6 lg:p-8 bg-[#F1FAEE] rounded-3xl border border-[#A8DADC]/50 shadow-lg min-h-[80vh] overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-16 w-56 h-56 bg-[#A8DADC] opacity-30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-64 h-64 bg-[#457B9D] opacity-30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 space-y-8">
        {/* Top: welcome + stats */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] items-stretch">
          {/* Welcome banner */}
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl border border-[#A8DADC]/60 shadow-md p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-xs sm:text-sm text-[#1D3557]/70 mb-1">
                Dashboard Overview
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#1D3557]">
                Welcome back, Doctor
              </h2>
              <p className="text-xs sm:text-sm text-[#1D3557]/75 mt-1">
                Here&apos;s a quick snapshot of your earnings, appointments, and
                patients today.
              </p>
            </div>
            <img
              src={assets.doctor_icon}
              className="w-20 sm:w-24 opacity-95"
              alt="doctor"
            />
          </div>

          {/* Quick stats summary */}
          <div className="grid grid-cols-3 gap-3">
            <StatChip
              label="Earnings"
              value={`${currency} ${dashData.earnings}`}
            />
            <StatChip label="Appointments" value={dashData.appointments} />
            <StatChip label="Patients" value={dashData.patients} />
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <StatCard
            icon={<FiTrendingUp className="text-xl text-[#457B9D]" />}
            title="Total Earnings"
            value={`${currency} ${dashData.earnings}`}
            hint="From completed appointments"
          />
          <StatCard
            icon={<FiCalendar className="text-xl text-[#457B9D]" />}
            title="Total Appointments"
            value={dashData.appointments}
            hint="All time bookings"
          />
          <StatCard
            icon={<FiUsers className="text-xl text-[#457B9D]" />}
            title="Patients"
            value={dashData.patients}
            hint="Unique patients treated"
          />
        </div>

        {/* Latest Bookings */}
        <div className="bg-white/90 rounded-2xl shadow-md border border-[#A8DADC]/60 overflow-hidden">
          <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#A8DADC]/60 bg-[#F1FAEE]/80">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#A8DADC]/30 border border-[#A8DADC]/70">
              <FiList className="text-[#457B9D]" />
            </div>
            <div>
              <p className="font-semibold text-[#1D3557] text-base sm:text-lg">
                Latest Bookings
              </p>
              <p className="text-[11px] text-[#1D3557]/70">
                Recent appointments scheduled with you
              </p>
            </div>
          </div>

          <div>
            {dashData.latestAppointments.slice(0, 5).map((item, index) => {
              const formattedDate = slotDateFormat(item.slotDate)

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
                <div className="flex gap-2">
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#FEE2E2] text-[#B91C1C] border border-[#FCA5A5] hover:bg-[#FCA5A5]/70 transition-all"
                  >
                    <FiXCircle className="text-[12px]" />
                    Cancel
                  </button>
                  <button
                    onClick={() => completeAppointment(item._id)}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] bg-[#DCFCE7] text-[#166534] border border-[#86EFAC] hover:bg-[#86EFAC]/80 transition-all"
                  >
                    <FiCheckCircle className="text-[12px]" />
                    Mark Done
                  </button>
                </div>
              )

              return (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center px-5 sm:px-6 py-4 gap-3 sm:gap-4 hover:bg-[#A8DADC]/10 border-b border-[#A8DADC]/40 last:border-none transition-all"
                >
                  {/* Patient avatar */}
                  <div className="flex-shrink-0">
                    <img
                      className="rounded-full w-10 h-10 sm:w-12 sm:h-12 object-cover border border-[#A8DADC]/70"
                      src={item.userData.image}
                      alt={item.userData.name}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-xs sm:text-sm text-[#1D3557]/85">
                    <p className="text-[#1D3557] font-medium">
                      {item.userData.name}
                    </p>
                    <p className="text-[11px] text-[#1D3557]/70">
                      Booking on {formattedDate} · {item.slotTime}
                    </p>
                  </div>

                  {/* Actions / status */}
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

const StatCard = ({ icon, title, value, hint }) => (
  <div className="flex items-center gap-4 bg-white/90 border border-[#A8DADC]/60 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#A8DADC]/25 border border-[#A8DADC]/70">
      {icon}
    </div>
    <div>
      <p className="text-lg sm:text-xl font-semibold text-[#1D3557]">
        {value}
      </p>
      <p className="text-xs text-[#1D3557]/70">{title}</p>
      {hint && (
        <p className="text-[10px] text-[#1D3557]/60 mt-0.5">{hint}</p>
      )}
    </div>
  </div>
)

const StatChip = ({ label, value }) => (
  <div className="flex flex-col justify-center rounded-2xl border border-[#A8DADC]/60 bg-white/80 px-3 py-3 shadow-sm text-center">
    <p className="text-xs text-[#1D3557]/70 mb-1">{label}</p>
    <p className="text-sm font-semibold text-[#1D3557]">{value}</p>
  </div>
)

export default DoctorDashboard
