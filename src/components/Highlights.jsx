import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { rightImg, watchImg } from '../utils'
import Videocarousel from './Videocarousel'

const Highlights = () => {

  useGSAP(()=>{
    gsap.to('#title',{
      opacity:1,
      y:0,
      delay:0.25,
    })
    gsap.to('.link',{
      opacity:1,
      y:0,
      delay:0.5,
      stagger:0.25,
    })
  },[])

  return (
    <section id="highlights" className='w-full overflow-hidden bg-zinc common-padding h-full'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full flex justify-between'>
          <h1 className='section-heading' id = "title">Get the highlights.</h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className='link'>Watch The Film
              <img src={watchImg} alt="watch" className='ml-2'/>
            </p>
            <p className='link'>Watch The Event
              <img src={rightImg} alt="right" className='ml-2'/>
            </p>
          </div>
        </div>
        <Videocarousel/>
      </div>
    </section>
  )
}

export default Highlights