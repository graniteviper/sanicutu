import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)




export const animationWithGSAP = (target,animationprops,scrollprops)=>{
    gsap.to(target,{
        ...animationprops,
        scrollTrigger:{
            trigger:target,
            toggleActions:'restart reverse restart reverse',
            start:'top 85%',
            ...scrollprops,
        }
    })
}