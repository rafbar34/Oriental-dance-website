import React from 'react';
import { gql } from 'graphql-request';
import dancer from '../assets/img7.jpg'
import { Slide } from 'react-reveal';
import Fade from 'react-reveal/Fade';

export const About = ({myRef}) => {
    return (
        <div className=' h-full '>
            <div ref={myRef} className='bg-[#090a0c] w-full h-full flex justify-center'>
              <Fade left> <div className='flex  items-center'> <img src={dancer} alt='dancer' /></div></Fade> 
                <div>
                    <div className='flex  flex-col pt-8 items-center justify-center min-h-screen h-full'>
                        <h2 className='text-yellow-200 font-serif font-bold text-6xl pr-5'>O nas</h2>
                        <Slide right>
                        <div className='w-3/4 h-3/4 rounded-2xl flex flex-col items-center justify-center'>
                            <p className='text-2xl leading-9 tracking-wide w-1/2 text-center text-white'>Jesteśmy doświadczoną grupą taneczną z długoletnim stażem scenicznym.
                                Wszystkie tańczymy od najmłodszych lat, każda z nas ma na swoim koncie wiele tanecznych osiągnięć min. jesteśmy brązowymi medalistkami mistrzostw Belly Dance Świata International Dance Federation, mistrzyniami i  wice mistrzyniami Europy Wschodniej zarówno w kategoriach solowych jak i grupowych.
                                Nasza grupa swoim Orientalnym Show uświetniła wiele pokazów komercyjnych min; wesela, urodziny, imprezy firmowe i okolicznościowe.
                            </p>
                            <h3 className='text-yellow-200'>Zapraszamy do zapoznanaia sięz naszą ofertą</h3>
                        </div>
                        </Slide>
                    </div>
                </div>
            </div>

        </div>
    )
}