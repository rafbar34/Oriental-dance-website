import React, { Suspense } from 'react';
import { gql } from 'graphql-request';
import Fade from 'react-reveal/Fade';
import logo from '../assets/logo1.png'
import img5 from '../assets/img5withoutBg.png'
export const HomePage = ({ myRef }) => {
    return (
        <div>
            <div ref={myRef}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='bg-[url("./assets/background2.png")] bg-no-repeat bg-cover  w-full min-h-screen h-full  flex justify-center'>
                    <div className='flex  justify-around items-center mt-20  flex-col h-full'>
                        <div className='w-full flex justify-center'>
                            <Fade top>
                                <h1 className='absolute z-10 top-36  	text-transform: uppercase font-serif font bold text-2xl sm:text-5xl text-white text-center'>Wyjątkowe taneczne show</h1>
                            </Fade>
                        </div>
                        <div className='sm:w-[47%] mt-36 sm:mt-16'><img src={img5} /></div>
                        <div className='flex justify-center w-full'>
                            <Fade top>
                                <div className='absolute z-10  bg-opacity-20 sm:bg-opacity-0 bg-red-400 sm:bg-none bottom-5 sm:-bottom-8'>
                                    <img src={logo} className='z-10  sm:ml-5 ml-9 ' width='80%' alt='oriental show girls pokazy taneczne' />
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Suspense>
            </div>
        </div>
    )
}