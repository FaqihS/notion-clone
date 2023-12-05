import { useEffect, useState } from "react";

export default function useScrollTop(treshhold=10){
  const [isScrolled,setIsScrolled] = useState(false)
  useEffect(()=>{
    function updateScroll (){
      if(window.scrollY>treshhold){
        setIsScrolled(true)
      }else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll',updateScroll)
    return ()=> window.removeEventListener('scroll',updateScroll)
  },[])

  return isScrolled

}
