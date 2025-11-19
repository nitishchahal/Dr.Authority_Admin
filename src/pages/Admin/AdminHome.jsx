import React from 'react'
import { motion } from 'framer-motion'
import {
  FaUserShield,
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaChartBar,
  FaCog,
  FaHospital,
  FaClipboardList,
} from 'react-icons/fa'

const AdminHome = ({ adminName = 'Nitish (Admin)' }) => {
  return (
    <motion.div
      className="relative mt-6 md:mt-10 mx-3 sm:mx-6 md:mx-8 lg:mx-12 bg-[#F1FAEE] rounded-3xl border border-[#A8DADC]/50 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-3rem] w-60 h-60 bg-[#A8DADC] rounded-full blur-3xl opacity-40" />
        <div className="absolute -bottom-24 left-[-4rem] w-72 h-72 bg-[#457B9D] rounded-full blur-3xl opacity-30" />
        <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-[#A8DADC]/70 to-transparent opacity-60" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 space-y-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#A8DADC]/70 text-[11px] sm:text-xs text-[#1D3557]">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#457B9D] text-[#F1FAEE] text-[10px]">
                <FaUserShield />
              </span>
              <span>All system controls at your fingertips</span>
            </div>

            <div className="space-y-1">
              <p className="text-xs sm:text-sm text-[#1D3557]/70">
                Welcome back,
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1D3557] tracking-tight">
                {adminName}
              </h1>
              <p className="text-xs sm:text-sm text-[#1D3557]/75 max-w-xl">
                Monitor doctors, patients, appointments and platform performance from a single, powerful dashboard.
              </p>
            </div>
          </div>

          {/* Admin stats summary */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full md:w-[460px]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
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
            <div className="rounded-2xl bg-white/85 border border-[#A8DADC]/70 p-3 text-[11px] sm:text-xs text-[#1D3557]">
              <p className="flex items-center gap-1.5 opacity-80">
                <FaChartBar className="text-[#457B9D]" /> Uptime
              </p>
              <p className="mt-1 text-lg sm:text-xl font-bold leading-tight">
                99.9%
              </p>
              <p className="opacity-70">Last 30 days</p>
            </div>
          </motion.div>
        </div>

        {/* Middle layout: management cards + activity */}
        <div className="grid gap-5 lg:gap-6 lg:grid-cols-12">
          {/* Management zones */}
          <motion.div
            className="lg:col-span-7 space-y-4"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
          >
            {/* Resource blocks */}
            <div className="rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-semibold text-[#1D3557]">
                  Platform management
                </p>
                <span className="text-[11px] text-[#1D3557]/70">
                  Quick access to core areas
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[11px] sm:text-xs">
                {[
                  {
                    label: 'Manage doctors',
                    desc: 'Approve, edit & disable profiles',
                    icon: <FaUserMd />,
                  },
                  {
                    label: 'Manage patients',
                    desc: 'View & support patient accounts',
                    icon: <FaUsers />,
                  },
                  {
                    label: 'Appointments',
                    desc: 'Monitor bookings & cancellations',
                    icon: <FaCalendarCheck />,
                  },
                  {
                    label: 'Clinics & branches',
                    desc: 'Configure locations & timings',
                    icon: <FaHospital />,
                  },
                  {
                    label: 'Reports & analytics',
                    desc: 'Revenue, usage & performance',
                    icon: <FaChartBar />,
                  },
                  {
                    label: 'System settings',
                    desc: 'Roles, permissions & policies',
                    icon: <FaCog />,
                  },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="group flex flex-col gap-1 rounded-xl bg-[#F1FAEE] border border-[#A8DADC]/70 px-3 py-3 hover:bg-[#A8DADC]/15 transition-all text-left"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[#A8DADC]/70 text-[12px] text-[#457B9D] group-hover:scale-105 transition-transform">
                      {item.icon}
                    </span>
                    <span className="font-semibold text-[#1D3557]">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-[#1D3557]/70">
                      {item.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* System status */}
            <div className="rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-3 text-[11px] sm:text-xs text-[#1D3557]/80">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#1D3557] flex items-center gap-2">
                  <FaClipboardList className="text-[#457B9D]" /> System overview
                </p>
                <span className="px-2 py-1 rounded-full bg-[#F1FAEE] border border-[#A8DADC]/70 text-[10px]">
                  Healthy
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="rounded-lg bg-[#F1FAEE] p-3 border border-[#A8DADC]/60">
                  <p className="text-[10px] opacity-70">Payments status</p>
                  <p className="mt-1 text-sm font-semibold text-[#1D3557]">
                    Active
                  </p>
                  <p className="text-[10px] opacity-70">No failed payouts</p>
                </div>
                <div className="rounded-lg bg-[#F1FAEE] p-3 border border-[#A8DADC]/60">
                  <p className="text-[10px] opacity-70">Notifications</p>
                  <p className="mt-1 text-sm font-semibold text-[#1D3557]">
                    34 sent
                  </p>
                  <p className="text-[10px] opacity-70">Last 24 hours</p>
                </div>
                <div className="rounded-lg bg-[#F1FAEE] p-3 border border-[#A8DADC]/60">
                  <p className="text-[10px] opacity-70">Error rate</p>
                  <p className="mt-1 text-sm font-semibold text-[#1D3557]">
                    0.3%
                  </p>
                  <p className="text-[10px] opacity-70">Within safe range</p>
                </div>
                <div className="rounded-lg bg-[#F1FAEE] p-3 border border-[#A8DADC]/60">
                  <p className="text-[10px] opacity-70">Support tickets</p>
                  <p className="mt-1 text-sm font-semibold text-[#1D3557]">
                    7 open
                  </p>
                  <p className="text-[10px] opacity-70">2 high priority</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Activity timeline */}
          <motion.div
            className="lg:col-span-5 rounded-2xl bg-white/90 border border-[#A8DADC]/70 shadow-sm p-4 sm:p-5 space-y-3 text-[11px] sm:text-xs text-[#1D3557]/80"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.45 }}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[#1D3557]">
                Recent activity
              </p>
              <button className="text-[11px] text-[#457B9D] hover:underline">
                View all logs
              </button>
            </div>

            <div className="space-y-3">
              {[
                {
                  time: '5 min ago',
                  text: 'New doctor registration from Dr. Meeta Kapoor (Cardiologist).',
                },
                {
                  time: '22 min ago',
                  text: '3 appointments were cancelled and refunded automatically.',
                },
                {
                  time: '1 hr ago',
                  text: 'System generated weekly usage report for management.',
                },
                {
                  time: '2 hrs ago',
                  text: 'Admin role updated: Support Team given access to appointment logs.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3"
                >
                  <div className="flex flex-col items-center">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#457B9D]" />
                    {i < 3 && (
                      <span className="flex-1 w-px bg-[#A8DADC]/70 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 rounded-lg bg-[#F1FAEE] px-3 py-2">
                    <p className="text-[10px] text-[#1D3557]/60">
                      {item.time}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#1D3557]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AdminHome
