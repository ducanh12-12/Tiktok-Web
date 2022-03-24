import React from 'react'
import {FaTiktok} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {FiMoreVertical} from 'react-icons/fi'

function NavBar() {
  const loggin = document.querySelector('#login')
  const handleLogin = () =>{
    loggin.style.display = 'flex'
  }
  return (
    <div className='fixed border-b-[1px] boder-slate-300 z-10 w-[100%]'>
    <div className='h-[60px]   bg-white w-[1106px] flex flex-row justify-between mx-auto items-center top-0 left-[205px] text-center '>
        <div className='text-[1.7rem] font-extrabold flex items-center'>
            <FaTiktok className='flex justify-center items'/>
            <span className='text-black ml-1'>TikTok</span>
        </div>
        <div className='flex justify-center items-center p-3 rounded-full bg-[#E9E9E9]  '>
            <input placeholder='Tìm kiếm tài khoản và video' 
            type='text' 
            name="search-navbar" 
            className='font-[400]  text-[1.05rem] bg-[#E9E9E9] border-[none] outline-0 border-r-[1px] border-slate-300 w-[293px] '
            />
            <BsSearch className='text-2xl text-slate-400 pl-1'/>
        </div>
        <div className='flex items-center'>
            <a className='text-lg font-bold text-black'>Tải lên</a>
            <a onClick={handleLogin} className='cursor-pointer p-[6px] rounded-[5px] font-bold text-white bg-[#EF2950] text-center pointer ml-4 mr-2'>Đăng nhập</a>
            <FiMoreVertical className='font-bold text-3xl pl-2' />

        </div>
    </div>
    </div>
  )
}

export default NavBar