import { useEffect, useState } from "react";
import { Modal } from "@mui/material"
import noticia1 from '../assets/img/noticia1.jpg'
import fulbito2006 from '../assets/img/fulbito2006.jpeg'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export const Noticia = () => {
    const [open, setOpen] = useState(true);
    let picture = [noticia1,fulbito2006]
    const [item, setItem] = useState(0)

  const previous = () => {
    let newItem= item
    if(newItem === 0){
        newItem = picture.length-1 
        setItem(newItem)
    }else {
        newItem= item - 1
        setItem(newItem)
    }
  }
  const next = () => {
    let newItem = item
    if(newItem===1){
        setItem(0)
    }else{
        newItem = item + 1
        setItem(newItem)
    }

}
    const handleClose = () => {
      setOpen(false);
    };
    useEffect(() => {
      setTimeout(() => {
        setOpen(false)
      }, 20000);
    }, [])
    

  return (
    <>
        <Modal className="border-0 outline-none flex justify-center items-center" 
            open={open} 
            onClose={handleClose}>
            <div className="outline-none">
                <div className="border-2 w-[90%] h-[40%] md:w-[80%] lg:w-[65%] xl:w-[45%] flex justify-center items-center m-auto"
                onClose={handleClose}>
                    <img className="duration-500 w-full md:w-[1200px] lg:w-[1500px] lg:[70%]" src={picture[item]} alt="" />
                </div>
                <div className="flex justify-center items-center">
                <FaAngleLeft onClick={previous} className="cursor-pointer text-white font-bold stroke-2 hover:text-cyan-200 w-8 h-16" />
                <FaAngleRight onClick={next} className="cursor-pointer  text-white font-bold stroke-2 hover:text-cyan-200 w-8 h-16"/>
                </div>
                {/* <div className=' h-full w-full m-auto flex justify-center items-center  relative'>
                    <div className="duration-500 h-full w-3/4  lg:w-2/4 bg-cover bg-center" style={{backgroundImage:`url(${picture[item]})`}}>
                    </div>
                    <FaAngleLeft onClick={previous} className="cursor-pointer flex-none text-marron font-bold stroke-2 hover:text-marron2 w-8 h-16 absolute  top-1/2 -translate-x-0 -translate-y-[50%] left-1" />
                    <FaAngleRight onClick={next} className="cursor-pointer flex-none text-marron font-bold stroke-2 hover:text-marron2 w-8 h-16 absolute  top-1/2 -translate-y-[50%] right-1"/>
                </div> */}
            </div>
        </Modal>


    
    
    </>
  )
}
