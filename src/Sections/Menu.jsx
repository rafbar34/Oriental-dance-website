import React from 'react';
import jp2 from '../assets/logo1.png'

export const Menu = ({ myRefHome, myRefAboutsUs, myRefGallery, myRefOffer, myRefVideo, myRefContact }) => {
    const executeScroll = (myRef) => {
        myRef.current.scrollIntoView({ behavior: 'smooth', block: "start" });
    }
    const menuValues = [{ title: 'Strona Główna', ref: myRefHome }, { title: 'O nas', ref: myRefAboutsUs }, { title: 'Galeria', ref: myRefGallery }, { title: 'Oferta', ref: myRefOffer }, { title: 'Pokazy', ref: myRefVideo }, { title: 'Kontakt', ref: myRefContact }]
    return (
        <div className='bg-black font-link-2  z-30  w-full min-h-24 h-28 fixed text-white flex justify-center'>
            <div className='hidden mt-2 ml-5 sm:block w-[9%]'><img src={jp2} /></div>
            <div className='flex justify-evenly   w-full text-sm sm:text-sm items-center text-center cursor-pointer'>
                {menuValues.map((menuValue) => (
                    <div onClick={() => { executeScroll(menuValue.ref) }} className='w-1/8 mx-2 hover:opacity-75 sm:text-xl'>{menuValue.title}</div>
                ))}
            </div>
        </div>
    )
}