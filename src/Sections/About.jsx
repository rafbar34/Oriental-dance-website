import React from 'react';
import { gql } from 'graphql-request';
import dancer from '../assets/img7.jpg'
import { Slide } from 'react-reveal';
import Fade from 'react-reveal/Fade';

export const About = ({ myRef }) => {
    return (
        <div className=' h-full '>
            <div ref={myRef} className='bg-[#090a0c] w-full h-full min-h-screen flex sm:flex-row flex-col justify-center'>
                <Fade left> <div className='flex mr-10 sm:mr-0  items-center'> <img src={dancer} alt='dancer' /></div></Fade>
                <div>
                    <div className='flex  flex-col pt-8 items-center justify-center min-h-screen h-full'>
                        <h1 className='text-yellow-200 font-serif font-bold text-6xl pr-5 mb-5 sm:mb-0'>O nas</h1>
                        <Slide right>
                            <div className='w-3/4 h-3/4 rounded-2xl flex flex-col items-center justify-center'>
                                <h3 className='text-xl leading-9 tracking-wide w-3/4 sm:text-xl text-center text-white'>Jesteśmy doświadczoną grupą taneczną z długoletnim stażem scenicznym.
                                    Wszystkie tańczymy od najmłodszych lat, każda z nas ma na swoim koncie wiele tanecznych osiągnięć, m.in. jesteśmy brązowymi medalistkami Mistrzostw Świata Belly Dance International Dance Federation, mistrzyniami i  wicemistrzyniami Europy Wschodniej, zarówno w kategoriach solowych, jak i grupowych.
                                    Nasza grupa swoim Orientalnym Show uświetniła wiele pokazów komercyjnych, m.in. wesela, urodziny, imprezy firmowe i okolicznościowe.
                                </h3>
                                <h3 className='text-yellow-200 mb-5 mt-20'>Zapraszamy do zapoznania się z naszą ofertą</h3>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>

        </div>
    )
}