import React from 'react'
import Image from "next/image";

import customerServiceIcon from '/public/Images/customer-service.png'

const CustomerService = () => {
  return (
    <div>
      <h4 className="fixed z-40 right-4 bottom-10 2xl:pr-3 pb-3 text-white rounded-full shadow-lg transition-transform transform hover:scale-110">
          <Image className="w-10 2xl:w-20 ml-2" src={customerServiceIcon.src} alt="customerService" width={80} height={0}/><span className='text-custom-xs 2xl:text-lg'>Contact me</span>
        </h4>
    </div>
  )
}

export default CustomerService
