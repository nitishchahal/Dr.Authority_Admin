import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import { FiUser, FiMail, FiLock, FiShield } from 'react-icons/fi'

const Login = () => {
  const [state, setState] = useState('Admin') // 'Admin' | 'Doctor'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', {
          email,
          password,
        })
        if (data.success) {
          setAToken(data.token)
          localStorage.setItem('aToken', data.token)
          toast.success('Admin login successful')
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', {
          email,
          password,
        })
        if (data.success) {
          setDToken(data.token)
          localStorage.setItem('dToken', data.token)
          toast.success('Doctor login successful')
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      console.error(error)
      toast.error(error?.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#F1FAEE] via-[#E8F6F3] to-[#A8DADC]/60 px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white/90 backdrop-blur-sm border border-[#A8DADC]/60 rounded-2xl shadow-xl px-6 sm:px-8 py-7 text-sm text-[#1D3557] relative overflow-hidden"
      >
        {/* Soft background accent */}
        <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-[#A8DADC] opacity-30 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col gap-5">
          {/* Title */}
          <div className="text-center">
            <p className="text-2xl font-semibold text-[#1D3557]">
              <span className="text-[#457B9D]">{state}</span> Login
            </p>
            <p className="text-xs text-[#1D3557]/70 mt-1">
              Sign in to manage appointments and doctors.
            </p>
          </div>

          {/* Toggle Admin / Doctor */}
          <div className="flex items-center justify-center gap-2 text-xs">
            <button
              type="button"
              onClick={() => setState('Admin')}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full border text-xs transition-all ${
                state === 'Admin'
                  ? 'bg-[#457B9D] text-white border-[#457B9D] shadow-md'
                  : 'bg-white text-[#1D3557]/80 border-[#A8DADC] hover:bg-[#F1FAEE]'
              }`}
            >
              <FiShield className="text-[12px]" />
              Admin
            </button>
            <button
              type="button"
              onClick={() => setState('Doctor')}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full border text-xs transition-all ${
                state === 'Doctor'
                  ? 'bg-[#457B9D] text-white border-[#457B9D] shadow-md'
                  : 'bg-white text-[#1D3557]/80 border-[#A8DADC] hover:bg-[#F1FAEE]'
              }`}
            >
              <FiUser className="text-[12px]" />
              Doctor
            </button>
          </div>

          {/* Email */}
          <div className="w-full">
            <p className="text-xs font-medium text-[#1D3557]/80 mb-1">Email</p>
            <div className="flex items-center gap-2 border border-[#A8DADC] rounded-lg px-3 py-2 bg-white/80 focus-within:border-[#457B9D] focus-within:ring-1 focus-within:ring-[#A8DADC]">
              <FiMail className="text-[#94a3b8]" />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full bg-transparent outline-none text-sm text-[#1D3557]"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full">
            <p className="text-xs font-medium text-[#1D3557]/80 mb-1">
              Password
            </p>
            <div className="flex items-center gap-2 border border-[#A8DADC] rounded-lg px-3 py-2 bg-white/80 focus-within:border-[#457B9D] focus-within:ring-1 focus-within:ring-[#A8DADC]">
              <FiLock className="text-[#94a3b8]" />
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full bg-transparent outline-none text-sm text-[#1D3557]"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            className="mt-1 bg-gradient-to-r from-[#457B9D] to-[#1D3557] text-white w-full py-2.5 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:translate-y-[1px] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in…' : 'Login'}
          </button>

          {/* Switch text (optional small helper) */}
          <p className="text-center text-xs text-[#1D3557]/70 mt-1">
            {state === 'Admin' ? 'Doctor login?' : 'Admin login?'}{' '}
            <span
              onClick={() => setState(state === 'Admin' ? 'Doctor' : 'Admin')}
              className="text-[#457B9D] font-medium underline cursor-pointer"
            >
              Switch here
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
