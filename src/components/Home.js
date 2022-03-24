import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import {RiLiveFill} from 'react-icons/ri'
const Home = function (){
    const loggin = document.querySelector('#login')
  const handleLogin = () =>{
    loggin.style.display = 'flex'
  }
    return (
        <div >
        <div className="text-xl text-red-500 font-bold flex flex-row items-center pt-2">
            <AiFillHome className='text-center '/>
            <a className='pl-2'>
                Dành cho bạn
            </a>
        </div>
        <div className="text-xl text-slate-700 font-bold flex flex-row items-center pt-2">
            <BsFillPeopleFill/>
            <a className='pl-2'>
                Đang follow
            </a>
        </div>
        <div className="text-xl text-slate-700 font-bold flex flex-row items-center pt-2">
            <RiLiveFill/>
            <a className='pl-2 text-center'>
                LIVE
            </a>
        </div>
        <div className='border-y-[1px] border-[rgba(22, 24, 35, 0.5)] pt-6 mt-6 mb-4 pb-6 '>
            <p className='text-[#16162380] text-[1rem] pb-3 '>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <a onClick={handleLogin} className='border-[1px] cursor-pointer border-[#FE5475] rounded-[5px] font-bold text-center text-[1.2rem] items-center text-[#FE5475] w-[324px] py-2 block'>Đăng nhập</a>
        </div>
        </div>
    )
}
export default Home
