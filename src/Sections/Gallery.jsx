import React, { useState } from 'react';
import { gql } from 'graphql-request';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import Flip from 'react-reveal/Fade';

export const Gallery = ({ myRef }) => {
    const [open, setOpen] = useState('')
    console.log(open)
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
    return (
        <div className='h-full '>
            <div ref={myRef} className='bg-[url("./assets/img1.jpg")] bg-[center_top_-10rem] pb-5 bg-fixed w-full bg-cover  min-h-screen h-full flex flex-col'>
                <p className='text-white text-center py-20 w-full mt-5 font-serif font-bold  text-6xl'>Galeria</p>
                <div className='flex w-full h-full justify-center '>
                    <div className='w-7/8 h-full rounded-2xl grid grid-rows-3 grid-cols-4 gap-y-8 gap-x-3 '>
                        {images.map((image) => (
                            <>
                                {open === image ? <div onClick={() => setOpen('none')} className='absolute z-20 text-yellow-800 right-[29%] mr-5 text-2xl'>X</div> : ''}
                                <div onClick={() => setOpen(image)} className={open === image ? ' absolute z-10 ml-60 h-full w-1/2  duration-500' : ''}>
                            <Flip left cascade>
                                    <img className={open === image ? 'w-7/8 h-7/8' : 'h-96 w-96'} src={image} />
                                </Flip>
                                </div>
                            </>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    )
}