import './App.css';
import Video from './components/Video'
import { useEffect, useState, useMemo } from 'react';
import db from './firebase';
import Home from './components/Home';
import NavBar from './components/NavBar';
import OfferAccount from './components/OfferAccount';
import FormLogin from './components/FormLogin';
import { FiLogIn } from 'react-icons/fi';
function App() {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    db.collection("tiktok")
    .get()
    .then((querySnapshot) => {
      setVideos(querySnapshot.docs.map((doc) => doc.data()));
    });
    },[])
    let x=0
    const handleScoll = () =>{
        x = x+1
        console.log("x")
    }
    document.querySelector('body').scroll(function(e) {

     console.log('1')
    });
    
    
  return (
    <div className='relative ' onScroll={handleScoll}>
      <div id='login' className='w-[100%] h-[100%] bg-[#00000080] z-[100] fixed items-center flex justify-center hidden'>
        
            <FormLogin />

    </div>
      <div className=' items-center  '>
      <NavBar />
      </div>
    <div className='flex justify-center '>
    <div className='flex flex-row   w-[1200px] mt-[60px] ' >
    <div className='flex flex-col w-[342px] h-[500px]  items-left ml-[50px] mt-[50px]    '>
      <Home />
    <div id='focus-1' tabIndex={2} className='mt-2' >
      <span className=' text-[0.85rem] font-[500] text-slate-600 '>Tài khoản được đề xuất</span>
    {
      videos.map((video) => (
        <OfferAccount data={video} key={video.decription} />
      ))
    }
    </div>
    </div>
    <div id='focus' tabIndex={1}  className="flex flex-col   w-[700px]    ">
     {
       videos.map((video) => (
        <Video data={video} key={video.decription} /> 
       ))
     }
    </div>
    </div>
    </div>

    </div>
  );
}
// export const useElementOnScreen = (options, targetRef) => {
//     const [isVisibile, setIsVisible] = useState()
//     const callbackFunction = entries => {
//         const [entry] = entries //const entry = entries[0]
//         setIsVisible(entry.isIntersecting)
//     }
//     const optionsMemo = useMemo(() => {
//         return options
//     }, [options])
//     useEffect(() => {
//         const observer = new IntersectionObserver(callbackFunction, optionsMemo)
//         const currentTarget = targetRef.current
//         if (currentTarget) observer.observe(currentTarget)

//         return () => {
//         if(currentTarget) observer.unobserve(currentTarget)
//         }
//     }, [targetRef, optionsMemo])
//     return isVisibile
// }


export default App;
