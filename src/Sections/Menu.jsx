import React from 'react';
import jp2 from '../assets/logo1.png'

export const Menu = ({myRefHome, myRefAboutsUs, myRefGallery, myRefOffer, myRefVideo, myRefContact}) => {
    const executeScroll = (myRef) =>{
        console.log(myRef)
        myRef.current.scrollIntoView({behavior: 'smooth', block: "start"});
    }
    return (
        <div className='bg-black font-link-2  z-30  w-full h-24 fixed text-white flex justify-center'>
            <div className='flex justify-evenly  w-full text-2xl items-center text-center cursor-pointer'>
                <div className='w-[6%] mt-4'><img src={jp2}/></div>
                <div onClick={()=>{executeScroll(myRefHome)}} className='w-1/8 mx-2 hover:opacity-75'>Strona Główna</div>
                <div onClick={()=>{executeScroll(myRefAboutsUs)}} className='w-1/8 mx-2 hover:opacity-75'>O nas</div>
                <div onClick={()=>{executeScroll(myRefGallery)}} className='w-1/12 mx-2 hover:opacity-75'>Galeria</div>
                <div onClick={()=>{executeScroll(myRefOffer)}} className='w-1/8 mx-2 hover:opacity-75'>Oferta</div>
                <div onClick={()=>{executeScroll(myRefVideo)}} className='w-1/8 mx-2 hover:opacity-75'>Pokazy</div>
                <div onClick={()=>{executeScroll(myRefContact)}} className='w-1/8 mx-2 hover:opacity-75'>Kontakt</div>
            </div>
        </div>
    )
}