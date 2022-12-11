import React, { useState } from 'react';
import Flip from 'react-reveal/Fade';
import { Suspense } from 'react';
import left from '../assets/left.svg'
import right from '../assets/right.svg'
export const Gallery = ({ myRef, imagesUrl }) => {
    const [open, setOpen] = useState(null)
    return (
        <div className='h-full '>
            <div ref={myRef} className='bg-[url("./assets/img1.jpg")] bg-[center_top_-10rem] pb-5 bg-fixed w-full bg-cover  min-h-screen h-full flex flex-col'>
                <h1 className='text-white text-center py-20 w-full mt-5 font-serif font-bold  text-6xl'>Galeria</h1>
                <div className='flex w-full h-full justify-center '>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='w-[85%] h-full rounded-2xl grid grid-rows-3 grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-3 '>
                        {imagesUrl && imagesUrl.images.map((image) =>{
                            console.log(image.key)
                        return(
                            <>
                                {open === image.key ? <div onClick={() => setOpen(null)} className='absolute z-20 text-yellow-800 right-[10%] mt-2 duration-500 sm:right-[29%] mr-5 text-2xl'>X</div> : ''}
                                {open === image.key ? <div onClick={() => setOpen(image.key+1)} className='absolute z-20 text-yellow-800 right-[5%] mt-[45%] sm:mt-[23%]   duration-500 sm:right-[28%]  mr-5 text-2xl'><img src={right} alt='w prawo' /></div> : ''}
                                {open === image.key ? <div onClick={() => setOpen(image.key-1)} className='absolute z-20 text-yellow-800 left-[11%] mt-[45%] sm:mt-[23%]   duration-500 sm:left-[28%]  mr-5 text-2xl'><img  src={left} alt='w lewo' /></div> : ''}

                                <div onClick={() => setOpen(image.key)} className={open === image.key ? ' absolute z-10 mr-10 sm:mr-0 sm:ml-60 h-full sm:w-1/2  duration-500' : ''}>
                                    <Flip left cascade>
                                        <img className={open === image.key ? 'sm:w-7/8 sm:h-7/8' : 'sm:h-96 sm:w-96 h-52 w-72'} src={image.image.url} alt='zdjecie' />
                                    </Flip>
                                </div>
                            </>
                        )}
                        )}

                    </div>
                    </Suspense>
                </div>
            </div>

        </div>
    )
}