import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import {
  FaUserMd,
  FaUserShield,
  FaCalendarCheck,
  FaUsers,
  FaChartLine,
  FaChartBar,
  FaClipboardList,
  FaVideo,
  FaCog,
} from 'react-icons/fa'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const containerVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const Home = () => {
  const { dToken, doctorData } = useContext(DoctorContext) || {}
  const { aToken, adminData } = useContext(AdminContext) || {}

  const isDoctor = !!dToken && !aToken
  const isAdmin = !!aToken && !dToken

  const doctorName = doctorData?.name || 'Doctor'
  const adminName = adminData?.name || 'Admin'

  return (
    <motion.div
      className="relative mt-6 md:mt-10 mx-3 sm:mx-6 md:mx-8 lg:mx-12 bg-[#F1FAEE] rounded-3xl border border-[#A8DADC]/50 shadow-lg overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        {/* top-left bubble */}
        <div className="absolute -top-24 -left-16 w-52 h-52 bg-[#A8DADC] rounded-full blur-3xl opacity-40" />
        {/* bottom-right bubble */}
        <div className="absolute -bottom-24 right-[-3rem] w-72 h-72 bg-[#457B9D] rounded-full blur-3xl opacity-30" />
        {/* center line */}
        <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-[#A8DADC]/70 to-transparent opacity-60" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 space-y-8">
        {/* Top header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#A8DADC]/70 text-[11px] sm:text-xs text-[#1D3557]">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                {isAdmin ? <FaUserShield /> : <FaUserMd />}
              </span>
              <span>
                {isAdmin
                  ? 'All platform controls under your command'
                  : 'All your patients & schedule under your control'}
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-[#1D3557]/70">
                Welcome back,
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D3557] tracking-tight">
                {isAdmin ? adminName : doctorName}
              </h1>
              <p className="text-xs sm:text-sm text-[#1D3557]/80 max-w-xl">
                {isAdmin ? (
                  <>
                    Monitor doctors, patients, appointments, and performance from one modern dashboard.
                    Everything is organized, visual, and under your control.
                  </>
                ) : (
                  <>
                    Manage your appointments, patients, and practice insights from a single smart workspace.
                    Stay focused while the platform takes care of the rest.
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Quick stats snapshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 w-full md:w-[420px]">
            {isAdmin ? (
              <>
                <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 text-[11px] sm:text-xs text-[#1D3557]">
                  <p className="flex items-center gap-1.5 opacity-80">
                    <FaUserMd className="text-[#457B9D]" /> Doctors
                  </p>
                  <p className="mt-1 text-lg sm:text-xl font-bold leading-tight">
                    120
                  </p>
                  <p className="opacity-70">8 pending approval</p>
                </div>
                <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 text-[11px] sm:text-xs text-[#1D3557]">
                  <p className="flex items-center gap-1.5 opacity-80">
                    <FaUsers className="text-[#457B9D]" /> Patients
                  </p>
                  <p className="mt-1 text-lg sm:text-xl font-bold leading-tight">
                    4.2k
                  </p>
                  <p className="opacity-70">+120 this week</p>
                </div>
                <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 text-[11px] sm:text-xs text-[#1D3557]">
                  <p className="flex items-center gap-1.5 opacity-80">
                    <FaCalendarCheck className="text-[#457B9D]" /> Appointments
                  </p>
                  <p className="mt-1 text-lg sm:text-xl font-bold leading-tight">
                    312
                  </p>
                  <p className="opacity-70">Today across platform</p>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 text-[11px] sm:text-xs text-[#1D3557]">
                  <p className="flex items-center gap-1.5 opacity-80">
                    <FaCalendarCheck className="text-[#457B9D]" /> Today&apos;s
                    Appointments
                  </p>
                  <p className="mt-1 text-lg sm:text-xl font-bold leading-tight">
                    14
                  </p>
                  <p className="opacity-70">3 online · 11 in-clinic</p>
                </div>
                <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 text-[11px] sm:text-xs text-[#1D3557]">
                  <p className="flex items-center gap-1.5 opacity-80">
                    <FaUsers className="text-[#457B9D]" /> Active Patients
                  </p>
                  <p className="mt-1 text-lg sm:text-xl font-bold leading-tight">
                    128
                  </p>
                  <p className="opacity-70">12 new this week</p>
                </div>
                <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 text-[11px] sm:text-xs text-[#1D3557]">
                  <p className="flex items-center gap-1.5 opacity-80">
                    <FaChartLine className="text-[#457B9D]" /> Overall Rating
                  </p>
                  <p className="mt-1 text-lg sm:text-xl font-bold leading-tight">
                    4.9★
                  </p>
                  <p className="opacity-70">230+ reviews</p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Main grid lower section */}
        <div className="grid gap-5 lg:gap-6 lg:grid-cols-12">
          {/* Left side: core panel */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary card: schedule or platform */}
            <div className="rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between gap-2 mb-1">
                <div>
                  <p className="text-sm font-semibold text-[#1D3557]">
                    {isAdmin ? 'Platform overview' : 'Today’s schedule'}
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#1D3557]/70">
                    {isAdmin
                      ? 'At a glance view of what is happening on the platform.'
                      : 'Quickly view and manage your upcoming appointments.'}
                  </p>
                </div>
                <button className="px-3 py-1.5 rounded-full text-[11px] border border-[#A8DADC] text-[#1D3557] bg-[#F1FAEE] hover:bg-[#A8DADC]/20 transition-all">
                  {isAdmin ? 'Go to analytics' : 'View full calendar'}
                </button>
              </div>

              {isAdmin ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px] sm:text-xs">
                  <div className="rounded-xl bg-[#F1FAEE] p-3 border border-[#A8DADC]/60">
                    <p className="text-[10px] opacity-70">Payments</p>
                    <p className="mt-1 text-sm font-semibold text-[#1D3557]">
                      All systems active
                    </p>
                    <p className="text-[10px] opacity-70 mt-1">
                      No failed payouts today
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#F1FAEE] p-3 border border-[#A8DADC]/60">
                    <p className="text-[10px] opacity-70">Error rate</p>
                    <p className="mt-1 text-sm font-semibold text-[#1D3557]">
                      0.3%
                    </p>
                    <p className="text-[10px] opacity-70 mt-1">
                      Within safe threshold
                    </p>
                  </div>
                  <div className="rounded-xl bg-[#F1FAEE] p-3 border border-[#A8DADC]/60">
                    <p className="text-[10px] opacity-70">Uptime</p>
                    <p className="mt-1 text-sm font-semibold text-[#1D3557]">
                      99.9%
                    </p>
                    <p className="text-[10px] opacity-70 mt-1">
                      Last 30 days
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {[
                    {
                      time: '09:30 AM',
                      name: 'Rohan Mehta',
                      type: 'Video consultation',
                      icon: <FaVideo className="text-[11px]" />,
                    },
                    {
                      time: '11:00 AM',
                      name: 'Priya Verma',
                      type: 'In-clinic · Follow-up',
                      icon: <FaUsers className="text-[11px]" />,
                    },
                    {
                      time: '02:15 PM',
                      name: 'Amit Singh',
                      type: 'In-clinic · New case',
                      icon: <FaClipboardList className="text-[11px]" />,
                    },
                  ].map((slot, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 rounded-xl border border-[#A8DADC]/60 bg-[#F1FAEE]/70 px-3 py-2.5 text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center border border-[#A8DADC]/70">
                          {slot.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-[#1D3557]">
                            {slot.name}
                          </p>
                          <p className="text-[11px] text-[#1D3557]/70">
                            {slot.type}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] sm:text-xs font-medium text-[#1D3557]">
                          {slot.time}
                        </p>
                        <button className="mt-1 text-[10px] text-[#457B9D] hover:underline">
                          View details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick actions row */}
            <div className="rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-3">
              <p className="text-sm font-semibold text-[#1D3557]">
                Quick actions
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] sm:text-xs">
                {(
                  isAdmin
                    ? [
                        { label: 'Manage doctors', icon: <FaUserMd /> },
                        { label: 'Manage patients', icon: <FaUsers /> },
                        { label: 'View appointments', icon: <FaCalendarCheck /> },
                        { label: 'System settings', icon: <FaCog /> },
                      ]
                    : [
                        { label: 'Create prescription', icon: <FaClipboardList /> },
                        { label: 'Start video consult', icon: <FaVideo /> },
                        { label: 'View patient list', icon: <FaUsers /> },
                        { label: 'Manage slots', icon: <FaCalendarCheck /> },
                      ]
                ).map((item, i) => (
                   <button
                     key={i}
                     className="flex items-center gap-2 rounded-xl bg-[#F1FAEE] border border-[#A8DADC]/70 px-3 py-2 hover:bg-[#A8DADC]/20 transition-all"
                   >
                     <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#A8DADC]/60 text-[11px] text-[#457B9D]">
                       {item.icon}
                     </span>
                     <span className="text-left text-[#1D3557]">
                       {item.label}
                     </span>
                   </button>
                 ))}
              </div>
            </div>
          </div>

          {/* Right side: activity / insights */}
          <div className="lg:col-span-5 rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-3 text-[11px] sm:text-xs text-[#1D3557]/80">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#1D3557]">
                {isAdmin ? 'Recent platform activity' : 'Recent alerts'}
              </p>
              <button className="text-[11px] text-[#457B9D] hover:underline">
                {isAdmin ? 'View all logs' : 'Mark all as read'}
              </button>
            </div>

            <div className="space-y-3">
              {isAdmin ? (
                <>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#457B9D]" />
                      <span className="flex-1 w-px bg-[#A8DADC]/70 mt-1" />
                    </div>
                    <div className="flex-1 rounded-lg bg-[#F1FAEE] px-3 py-2">
                      <p className="text-[10px] text-[#1D3557]/60">
                        5 min ago
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#1D3557]">
                        New doctor registration from{' '}
                        <b>Dr. Meeta Kapoor (Cardiologist)</b>.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#457B9D]" />
                      <span className="flex-1 w-px bg-[#A8DADC]/70 mt-1" />
                    </div>
                    <div className="flex-1 rounded-lg bg-[#F1FAEE] px-3 py-2">
                      <p className="text-[10px] text-[#1D3557]/60">
                        22 min ago
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#1D3557]">
                        3 appointments were cancelled and refunded automatically.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#457B9D]" />
                    </div>
                    <div className="flex-1 rounded-lg bg-[#F1FAEE] px-3 py-2">
                      <p className="text-[10px] text-[#1D3557]/60">
                        1 hr ago
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#1D3557]">
                        Weekly performance report is ready in analytics.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-2 rounded-lg bg-[#F1FAEE] px-3 py-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <p>
                      Your <b>05:30 PM</b> appointment with <b>Rahul Kumar</b>{' '}
                      has been confirmed.
                    </p>
                  </div>
                  <div className="flex gap-2 rounded-lg bg-[#F1FAEE] px-3 py-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
                    <p>3 new patients left feedback on recent consultations.</p>
                  </div>
                  <div className="flex gap-2 rounded-lg bg-[#F1FAEE] px-3 py-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                    <p>
                      Weekly performance summary is ready in your analytics panel.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
