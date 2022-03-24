import React from 'react'
import { useEffect, useState } from 'react';
import {AiOutlineClose,AiOutlineQrcode,AiOutlineFacebook,AiOutlineGoogle,AiOutlineInstagram,AiOutlineApple,AiOutlineTwitter} from 'react-icons/ai'
import db from '../firebase';

const FormLogin = () => {
    const loggin = document.querySelector('#login')
    const [login,setLogin] = useState([]);
   const handleClose = () =>{
    loggin.style.display = 'none'
   }
   useEffect(() =>{
    db.collection("login")
    .get()
    .then((querySnapshot) =>{
      setLogin(querySnapshot.docs.map((doc) => doc.data()))
    })
  })

  return (
    <div className='w-[478px] z-[100] h-[550px] rounded-[8px] bg-white text-center items-center flex flex-col justify-center relative '>
        <div  onClick={handleClose} className='absolute top-[24px] right-[24px] w-[40px] h-[40px] text-[25px] items-center flex justify-center cursor-pointer rounded-full bg-[#1618230f]'>
        <AiOutlineClose/>
        </div>
        <h1 className='font-[600] mt-10 text-[1.6rem] mb-8'>Đăng nhập vào TikTok</h1>
        <div className='border-b-[1px] pb-8 w-[100%] border-slate-300 pb-2'>

        <div className='h-[350px] w-[312px] mr-auto ml-auto  overflow-x-hidden overflow-scroll  '>
          {login.map((app)=>{
            return(    
            <a href={app.link} target="_blank" className='cursor-pointer flex text-[0.9rem] font-[600] items-center py-[5px]'>
          <img src={app.icon} className='w-[44px] h-[44px]  color-black p-2 border-[1px] border-slate-300'/>
            <p className='p-3 w-[269px] h-[44px] text-center border-[1px] border-slate-300'>Sử dụng mã {app.idName}</p>
            </a>)
          })}
        </div>
        </div>
        <div className='flex mr-auto p-5 '>
            <p className='text-[0.95rem] '>Bạn không có tài khoản?</p>
            <a className='text-[#EF2950]'>Đăng kí</a>
        </div>

    </div>
  )
}

export default FormLogin