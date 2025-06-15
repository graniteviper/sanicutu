import React, { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {heroVideo,smallHeroVideo} from '../utils'

const Hero = () => {
  useGSAP(()=>{
    gsap.to('#hero',{
      opacity:1,
      delay:1,
      duration:1,
    })

    gsap.to('#cta',{
      y:-100,
      opacity:1,
      delay:1,
      duration:1,
    })
  },[])

  const[videoSrc,setvideoSrc] = useState(window.innerWidth<760?smallHeroVideo:heroVideo)
  
  const handlesetvideoSrc = ()=>{
    if(window.innerWidth<760){
      setvideoSrc(smallHeroVideo)
    }
    else{
      setvideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handlesetvideoSrc);
    return ()=>{
      window.removeEventListener('resize',handlesetvideoSrc);
    }
  })


  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p className='hero-title' id = 'hero'>Tanishq Sharma</p>
        <div className='w-9/12 md:w-10/12'>
        <video autoPlay playsInline={true} muted key={videoSrc} className='pointer-events-none'>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      </div>

      <div id="cta" className='flex flex-col items-center justify-center opacity-0 translate-y-20'>
        <a href="#highlights" className='btn'>Buy</a>
        <p>From $199/Month or $999</p>
      </div>
    </section>
  )
}

export default Hero