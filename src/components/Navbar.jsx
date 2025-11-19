import React, { useContext } from 'react'
import Logo from '../assets/logo.png'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { FaUserShield } from 'react-icons/fa'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    if (dToken) {
      localStorage.removeItem('dToken')
      setDToken('')
    }
    if (aToken) {
      localStorage.removeItem('aToken')
      setAToken('')
    }
  }

  return (
    <nav className="relative z-50 bg-[#F1FAEE]/80 backdrop-blur-xl border-b border-[#A8DADC]/60 shadow-md px-4 sm:px-10 py-3 rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left: Logo + Role */}
        <div className="flex items-center gap-4">
          <img
            onClick={() => navigate('/')}
            src={Logo}
            alt="Logo"
            className="w-36 sm:w-40 cursor-pointer transition-transform hover:scale-[1.02]"
          />

          {/* Role Pill */}
          <div className="hidden sm:flex items-center gap-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#A8DADC]/60 shadow-sm">
            <FaUserShield className="text-[#457B9D] text-sm" />
            <span className="text-xs font-medium text-[#1D3557] tracking-wide">
              {aToken ? 'Admin' : 'Doctor'}
            </span>
          </div>
        </div>

        {/* Right: Logout Button */}
        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm sm:text-[15px] font-medium bg-gradient-to-r from-[#457B9D] to-[#1D3557] text-white px-6 sm:px-8 py-2.5 rounded-full shadow-md hover:shadow-lg hover:translate-y-[1px] transition-all duration-300"
        >
          <FiLogOut className="text-base" />
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
