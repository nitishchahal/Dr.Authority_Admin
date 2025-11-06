import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) getDashData()
  }, [dToken])

  return dashData && (
    <div className='p-6 space-y-8'>

      {/* Stats */}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {[
          { title: 'Earnings', value: `${currency} ${dashData.earnings}`, icon: assets.earning_icon },
          { title: 'Appointments', value: dashData.appointments, icon: assets.appointments_icon },
          { title: 'Patients', value: dashData.patients, icon: assets.patients_icon },
        ].map((card, index) => (
          <div key={index} className='flex items-center gap-4 bg-gradient-to-br from-blue-50 to-white border rounded-2xl p-5 shadow-sm hover:shadow-lg transition'>
            <img className='w-14' src={card.icon} alt='' />
            <div>
              <p className='text-2xl font-semibold text-gray-700'>{card.value}</p>
              <p className='text-gray-500 text-sm'>{card.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Appointments Banner */}
      <div className='bg-blue-600 text-white rounded-xl p-5 flex justify-between items-center shadow'>
        <div>
          <h2 className='text-xl font-semibold'>Welcome Back, Doctor</h2>
          <p className='text-sm opacity-90'>Here is your activity summary and latest bookings.</p>
        </div>
        <img src={assets.doctor_icon} className='w-20 opacity-90' />
      </div>

      {/* Latest Bookings */}
      <div className='bg-white rounded-xl shadow overflow-hidden'>
        <div className='flex items-center gap-2.5 px-5 py-4 border-b bg-gray-50'>
          <img src={assets.list_icon} alt='' />
          <p className='font-semibold text-gray-700'>Latest Bookings</p>
        </div>

        <div>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div key={index} className='flex items-center px-6 py-4 gap-4 hover:bg-gray-50 border-b last:border-none'>
              <img className='rounded-full w-12 h-12 object-cover' src={item.userData.image} alt='' />
              <div className='flex-1 text-sm'>
                <p className='text-gray-800 font-medium'>{item.userData.name}</p>
                <p className='text-gray-600'>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>

              {item.cancelled ? (
                <p className='text-red-500 text-xs font-bold'>Cancelled</p>
              ) : item.isCompleted ? (
                <p className='text-green-600 text-xs font-bold'>Completed</p>
              ) : (
                <div className='flex gap-2'>
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className='w-9 cursor-pointer hover:scale-110 transition'
                    src={assets.cancel_icon}
                    alt='cancel'
                  />
                  <img
                    onClick={() => completeAppointment(item._id)}
                    className='w-9 cursor-pointer hover:scale-110 transition'
                    src={assets.tick_icon}
                    alt='complete'
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default DoctorDashboard;