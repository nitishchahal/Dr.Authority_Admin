import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import {
  FiHome,
  FiCalendar,
  FiUserPlus,
  FiUsers,
  FiUser,
  FiLayout,
} from 'react-icons/fi'

const Sidebar = () => {
  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  const linkClass = ({ isActive }) =>
    `
    flex items-center gap-3 py-3.5 px-4 md:px-6 lg:px-8 
    cursor-pointer transition-all rounded-r-3xl
    text-sm
    ${
      isActive
        ? 'bg-[#F1FAEE] border-r-4 border-[#457B9D] text-[#1D3557] font-semibold shadow-sm'
        : 'text-[#1D3557]/80 hover:bg-[#A8DADC]/20 hover:text-[#1D3557]'
    }
  `

  return (
    <aside className="min-h-screen bg-[#F1FAEE]/80 border-r border-[#A8DADC]/60 shadow-md text-[#1D3557] px-2 md:px-3 py-4 flex flex-col">

      {/* Panel header */}
      <div className="px-3 md:px-5 mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#A8DADC]/60 text-[11px] text-[#1D3557]/80">
          <FiLayout className="text-[#457B9D] text-sm" />
          <span className="hidden sm:inline">
            {aToken ? 'Admin Dashboard' : 'Doctor Dashboard'}
          </span>
          <span className="sm:hidden">{aToken ? 'Admin' : 'Doctor'}</span>
        </div>
      </div>

      {/* Admin Sidebar */}
      {aToken && (
        <ul className="mt-2 space-y-1">
          <NavLink to="/admin-dashboard" className={linkClass}>
            <FiHome className="min-w-5 text-[#457B9D]" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink to="/all-appointments" className={linkClass}>
            <FiCalendar className="min-w-5 text-[#457B9D]" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink to="/add-doctor" className={linkClass}>
            <FiUserPlus className="min-w-5 text-[#457B9D]" />
            <p className="hidden md:block">Add Doctor</p>
          </NavLink>

          <NavLink to="/doctor-list" className={linkClass}>
            <FiUsers className="min-w-5 text-[#457B9D]" />
            <p className="hidden md:block">Doctors List</p>
          </NavLink>
        </ul>
      )}

      {/* Doctor Sidebar */}
      {dToken && (
        <ul className="mt-2 space-y-1">
          <NavLink to="/doctor-dashboard" className={linkClass}>
            <FiHome className="min-w-5 text-[#457B9D]" />
            <p className="hidden md:block">Dashboard</p>
          </NavLink>

          <NavLink to="/doctor-appointments" className={linkClass}>
            <FiCalendar className="min-w-5 text-[#457B9D]" />
            <p className="hidden md:block">Appointments</p>
          </NavLink>

          <NavLink to="/doctor-profile" className={linkClass}>
            <FiUser className="min-w-5 text-[#457B9D]" />
            <p className="hidden md:block">Profile</p>
          </NavLink>
        </ul>
      )}
    </aside>
  )
}

export default Sidebar
