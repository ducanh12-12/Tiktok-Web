import React, { useRef, useState,useEffect } from 'react'
import useElementOnScreen from '../App'
import {FaMusic,FaHeart,FaComment,FaShare} from 'react-icons/fa'
import $ from 'jquery'
const VideoInfo = ({avatar,idName,song,decription}) => {
    return <div className='flex flex-row'>
        <img className='w-[50px] h-[50px] rounded-full' src={avatar} alt="avt"/>
        <div className='ml-3 min-w-[80%] '>
            <div>
                <a href='#' className='text-xl font-bold hover:underline'>{idName}</a>
                <a href='#' className='text-xl'>Hoc lap trinh</a>
            </div>
            <div>
                {decription}
            </div>
            <div className='flex flex-row items-center'>
                <FaMusic/> <span className='ml-3'>{song}</span>
            </div>
        </div>
        <div><button className='p-2 pl-3 pr-3 border-2 border-red-400 text-red-400 rounded-md'>Follow</button></div>
    </div>
}
const VideoContent = ({like,share,cmt,video}) =>{
    const videoRef = useRef()
    const [playing,setPlaying] = useState(false);
    const vid = document.querySelector('video')
    const handleVideo = () => {
        if(!playing) {
            videoRef.current.pause()
            setPlaying(true)
        } else{
            videoRef.current.play()
            setPlaying(false)
        }
    }
    $(window).scroll(function() {
        const vide = $('video')
        vide.map(() =>{
            vide[0].play()
            if( $(window).scrollTop() > 250 ) {
                vide[1].play()
                vide[0].pause()
            } else {
                vide[1].pause()
                vide[0].play()
            }
        })
    });
    
    return <div id='vid'  className='flex flex-row flex-row-reverse'> 
        
        <div className='flex flex-col justify-end ml-5'>
            <div   className='text-center mb-4'>
            <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
            <FaHeart className='text-xl'/>
            </div>
            <span >{like}</span>
            </div>
            <div   className='text-center mb-4'>
            <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
            <FaComment className='text-xl'/>
                </div>
            <span >{cmt}</span>
            </div>
            <div   className='text-center mb-4'>
            <div className='w-[40px] h-[40px] rounded-full bg-slate-200 flex items-center justify-center'>
            <FaShare className='text-xl'/>
            </div>
            <span >{share}</span>
            </div>
        </div>
        <video 
        ref={videoRef}
        onClick={handleVideo} 
        className='w-[60%] max-h-[600px] ml-[50px] rounded-md mt-4' src={`${video}`} 
        loop 
        />
    </div>
}

const  Video = ({data}) => {
  return (
    <div className='snap-start max-w-[500px] border-b-2 border-gray-200 pb-10 pt-10'>
        <VideoInfo {...data} />
        <VideoContent {...data}/>
    </div>
  )}
  export default Video
