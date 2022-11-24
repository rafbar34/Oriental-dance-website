import React from 'react';
import { gql } from 'graphql-request';
import Fade from 'react-reveal/Fade';
import logo from '../assets/logo1.png'
import img5 from '../assets/img5withoutBg.png'
export const HomePage = ({ myRef }) => {
    return (
        <div>
            <div>
                <div className='bg-[url("./assets/background.png")] bg-cover bg-no-repeat bg-[center_top_-5rem] w-full min-h-screen h-full  flex justify-center'>
                    <div ref={myRef} className='bg-[url("./assets/bgImg.png")] bg-fixed bg-cover bg-no-repeat bg-[center_top_-5rem] pb-5'>
                        <div className='flex  justify-around items-center mt-20  flex-col h-full'>
                            <div className='w-full flex justify-center'>
                                <Fade top>
                                <p className='absolute z-10 top-36 	text-transform: uppercase font-serif font bold text-5xl text-red-600'>Wyjątkowe tanczene show</p>
                            </Fade>
                            </div>
                            <div className='w-[47%] mt-16'><img src={img5} /></div>
                            <div className='flex justify-center w-full'>
                            <Fade top>
                                <div className='absolute  z-10 -bottom-8'>
                                    <img src={logo} className='z-10 ml-5 ' width='80%' alt='oriental show girls pokazy taneczne' />
                                </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}