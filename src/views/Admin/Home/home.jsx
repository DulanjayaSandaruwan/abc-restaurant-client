import { DeliveryDining, Fastfood, People } from '@mui/icons-material'
import React, { useState } from 'react'
import LineChart from './LineChart'
import BarChart from './BarChart'
import { ActivitiesTimeline } from './TimeLine'
import { useEffect } from 'react'
import { getCategoryCount, getItemCount, getPendingOrderCount, getUserCount } from '../../../services/admin/AdminService'

const home = () => {

  const [countData, setCountData] = useState({
    itemCount: 0,
    categoryCount: 0,
    userCount: 0,
    pendingOrderCount: 0,
  })

  const updateCountData = (name, value) => {
    setCountData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    getUserCount().then(response => updateCountData('userCount', response.customerCount))
    getItemCount().then(response => updateCountData('itemCount', response.itemCount))
    getCategoryCount().then(response => updateCountData('categoryCount', response.categoryCount))
    getPendingOrderCount().then(response => updateCountData('pendingOrderCount', response.pendingOrderCount))
  }, [])

  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGelwS_r9NTwaRf2xg6A_Zu-v7BqFZdkcrnlwACCNgcNEnpzTmwZzaA9xC5RAEon5smSU&usqp=CAU" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Product Count
              </p>
              <p class="text-slate-500 font-medium">
                {countData.itemCount}
              </p>
            </div>
          </div>
        </div>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                User Count
              </p>
              <p class="text-slate-500 font-medium">
                {countData.userCount}
              </p>
            </div>
          </div>
        </div>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="data:image/png;base64,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" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Category Count
              </p>
              <p class="text-slate-500 font-medium">
                {countData.categoryCount}
              </p>
            </div>
          </div>
        </div>

        <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 w-full">
          <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCgBaVs3fX54MOHLpM2XqsQJYuwAJJhp-jg&s" alt="Woman's Face" />
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
                Pending Order Count
              </p>
              <p class="text-slate-500 font-medium">
                {countData.pendingOrderCount}
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='m-5'>
        <LineChart />
      </div>

      <div className='m-5 grid grid-cols-2 gap-5'>
        <BarChart />
        <ActivitiesTimeline />
      </div>


    </div>
  )
}

export default home
