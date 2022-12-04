import React from 'react';
import { gql } from 'graphql-request';
import ReactPlayer from 'react-player'

export const Video = ({ myRef }) => {
    return (
        <div className='h-screen'>
            <div ref={myRef} className='bg-[url("./assets/img3.jpg")] bg-center sm:bg-[center_top_-25rem] bg-fixed bg-cover min-h-screen h-full flex flex-col'>
                <p className='text-white text-center py-20 w-full font-serif font-bold mt-5 text-6xl'>Pokazy</p>
                <div className='flex  w-full  h-full'>
                    <div className='flex w-full justify-center'>
                        <ReactPlayer  url='https://www.youtube.com/watch?v=XT8BV2HjA4k' />
                    </div>
                </div>
            </div>

        </div>
    )
}