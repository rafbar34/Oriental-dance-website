import Fade from 'react-reveal/Fade';
import dancer from '../../src/assets/img4WithoutBg.png'
export const Contact = ({ myRef }) => {
    return (
        <div>
            <div ref={myRef} className='bg-black bg-fixed bg-cover min-h-screen h-full'>
                <div className='h-4/5 flex justify-center items-center '>
                    <Fade>
                        <div className='flex flex-col text-white h-full items-center'>
                            <div className='text-yellow-200 mt-24 font-serif font bold text-6xl'>Kontakt</div>
                            <div className='flex justify-end relative '>
                                <div className='sm:w-[80%] -bottom-60 -z-10 absolute   '><img className='w-full sm:w-3/4' src={dancer} /></div>
                                <div className='flex justify-end w-full'>
                                    <div className='flex z-10 mx-10 flex-col  mt-20 item gap-y-10 text-3xl'>
                                        <h4 className='text-3xl '>Jeżeli zainteresowała Państwa nasza oferta to zapraszamy do kontaktu</h4>
                                        <div>Tel: <span className='text-yellow-200 ml-5 sm:text-3xl text-xl'>505-533-187</span></div>
                                        <div>E-mail: <span className='text-yellow-200 ml-5 sm:text-3xl text-xl'>oriental.show.girls@gmail.com</span></div>
                                    </div></div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}