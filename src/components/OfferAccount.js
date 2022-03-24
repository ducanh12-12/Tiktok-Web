import React, { useEffect, useState } from 'react'
import './OfferAccount.css'

const OfferAccount = ({data}) => {
   
  return (
    <div id='account' className='relative'>
    <div  className='flex mt-2  ' >
    <img src={data.avatar} className='w-[40px] h-[40px] rounded-full' />
    <a>{data.idName}</a>
    </div>
    <div id='display'  className='absolute z-10 top-[45px] left-0 bg-white w-[312px] '>
        <div className='flex justify-between'>
        <img src={data.avatar} className='w-[50px] h-[50px] rounded-full' />
        <span className='text-white p-[2px] text-[1rem] h-[30px] rounded-[4px] px-6  font-[500] bg-[#FE2C55]'>Follow</span>
        </div>
        <a className='font-bold text-[1.1rem] '>{data.idName}</a>
        <p className='text-[1rem]'>Name</p>
        <div className='flex '>
            <p className='text-[1.2rem]'>
                <span className='font-bold' >4.8M</span>
                <span>Follower</span>
            </p>
            <p className='text-[1.2rem] pl-2'>
                <span className='font-bold'>4.8M</span>
                <span>Like</span>
            </p>
            
        </div>
        
    </div>
    </div>
  )
}

export default OfferAccount