import React from 'react';
import { gql } from 'graphql-request';
import dancer2 from '../assets/img3.jpg'

export const Video = ({ myRef }) => {
    return (
        <div className='h-screen'>
            <div ref={myRef} className='bg-[url("./assets/img3.jpg")] bg-center sm:bg-[center_top_-25rem] bg-fixed bg-cover min-h-screen h-full flex flex-col'>
                <p className='text-white text-center py-20 w-full font-serif font-bold mt-5 text-6xl'>Pokazy</p>
                <div className='flex  w-full  h-full'>
                    <div className='flex w-full justify-center'>
                        <div className='w-3/4 h-3/4 rounded-2xl grid grid-rows-2 grid-cols-2 sm:grid-cols-4 gap-x-5 '>
                            <video width="320" height="240" controls>Your browser does not support the video tag.</video>
                            <video width="320" height="240" controls>Your browser does not support the video tag.</video>
                            <video width="320" height="240" controls>Your browser does not support the video tag.</video>
                            <video width="320" height="240" controls>Your browser does not support the video tag.</video>
                            <video width="320" height="240" controls>Your browser does not support the video tag.</video>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}