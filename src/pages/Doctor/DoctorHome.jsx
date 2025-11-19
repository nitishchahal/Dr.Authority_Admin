import React from 'react'
import { motion } from 'framer-motion'
import {
  FaUserMd,
  FaCalendarCheck,
  FaUserFriends,
  FaClipboardList,
  FaBell,
  FaChartLine,
  FaVideo,
} from 'react-icons/fa'

const DoctorHome = ({ doctorName = 'Dr. Ananya Sharma' }) => {
  return (
    <motion.div
      className="relative mt-6 md:mt-10 mx-3 sm:mx-6 md:mx-8 lg:mx-12 bg-[#F1FAEE] rounded-3xl border border-[#A8DADC]/50 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 w-52 h-52 bg-[#A8DADC] rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 right-0 w-72 h-72 bg-[#457B9D] rounded-full blur-3xl opacity-30" />
        <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-[#A8DADC]/70 to-transparent opacity-60" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 space-y-8">
        {/* Top row */}
        <div className="flex flex-col gap-4 md:gap-6 md:flex-row md:items-center md:justify-between">
          {/* Greeting + primary info */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#A8DADC]/70 text-[11px] sm:text-xs text-[#1D3557]">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                <FaUserMd />
              </span>
              <span>All your patients & schedule under your control</span>
            </div>

            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-[#1D3557]/70">
                Welcome back,
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D3557] tracking-tight">
                {doctorName}
              </h1>
              <p className="text-xs sm:text-sm text-[#1D3557]/75 max-w-xl">
                Stay on top of your appointments, patients and practice insights — all from one intuitive dashboard.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-3 gap-3 md:gap-4 w-full md:w-[360px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 flex flex-col gap-1 text-xs sm:text-sm text-[#1D3557]">
              <p className="flex items-center gap-1.5 text-[11px] sm:text-xs opacity-80">
                <FaCalendarCheck className="text-[#457B9D]" /> Today&apos;s
                Appointments
              </p>
              <p className="text-xl font-bold leading-tight">14</p>
              <p className="text-[11px] opacity-70">3 online · 11 in-clinic</p>
            </div>
            <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 flex flex-col gap-1 text-xs sm:text-sm text-[#1D3557]">
              <p className="flex items-center gap-1.5 text-[11px] sm:text-xs opacity-80">
                <FaUserFriends className="text-[#457B9D]" /> Active Patients
              </p>
              <p className="text-xl font-bold leading-tight">128</p>
              <p className="text-[11px] opacity-70">12 new this week</p>
            </div>
            <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 flex flex-col gap-1 text-xs sm:text-sm text-[#1D3557]">
              <p className="flex items-center gap-1.5 text-[11px] sm:text-xs opacity-80">
                <FaChartLine className="text-[#457B9D]" /> Overall Rating
              </p>
              <p className="text-xl font-bold leading-tight">4.9★</p>
              <p className="text-[11px] opacity-70">230+ patient reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Middle layout: schedule + quick actions + notifications */}
        <div className="grid gap-5 lg:gap-6 lg:grid-cols-12">
          {/* Today schedule */}
          <motion.div
            className="lg:col-span-7 rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <div>
                <p className="text-sm font-semibold text-[#1D3557]">
                  Today&apos;s schedule
                </p>
                <p className="text-[11px] sm:text-xs text-[#1D3557]/70">
                  Quickly view and manage upcoming appointments
                </p>
              </div>
              <button className="px-3 py-1.5 rounded-full text-[11px] border border-[#A8DADC] text-[#1D3557] bg-[#F1FAEE] hover:bg-[#A8DADC]/20 transition-all">
                View full calendar
              </button>
            </div>

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
                  icon: <FaUserFriends className="text-[11px]" />,
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
          </motion.div>

          {/* Right side: Quick actions + notifications */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            {/* Quick actions */}
            <div className="rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-3">
              <p className="text-sm font-semibold text-[#1D3557]">
                Quick actions
              </p>
              <div className="grid grid-cols-2 gap-3 text-[11px] sm:text-xs">
                {[
                  { label: 'Create prescription', icon: <FaClipboardList /> },
                  { label: 'Start video consult', icon: <FaVideo /> },
                  { label: 'View patient list', icon: <FaUserFriends /> },
                  { label: 'Manage slots', icon: <FaCalendarCheck /> },
                ].map((item, i) => (
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

            {/* Notifications */}
            <div className="rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#1D3557] flex items-center gap-2">
                  <FaBell className="text-[#457B9D]" /> Recent alerts
                </p>
                <button className="text-[11px] text-[#457B9D] hover:underline">
                  Mark all as read
                </button>
              </div>

              <div className="space-y-2 text-[11px] sm:text-xs text-[#1D3557]/80">
                <div className="flex gap-2 rounded-lg bg-[#F1FAEE] px-3 py-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <p>
                    Your 05:30 PM appointment with <b>Rahul Kumar</b> has been confirmed.
                  </p>
                </div>
                <div className="flex gap-2 rounded-lg bg-[#F1FAEE] px-3 py-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
                  <p>
                    3 new patients left feedback on recent consultations.
                  </p>
                </div>
                <div className="flex gap-2 rounded-lg bg-[#F1FAEE] px-3 py-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                  <p>
                    Weekly performance report is ready to view in your analytics panel.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default DoctorHome
