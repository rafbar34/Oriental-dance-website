import React from 'react';
import { gql } from 'graphql-request';
import dancer from '../assets/img6.jpg';
import dancer2 from '../assets/img9WithoutBg.png';
import Flip from 'react-reveal/Fade';

export const Offer = ({ myRef }) => {
    return (
        <div>
            <div ref={myRef} className='flex bg-black bg-[center_top_-13rem] bg-fixed bg-cover min-h-screen h-full'>
                <div className='flex flex-col w-full  mt-[10%]'>
                    <h2 className='text-yellow-200 font-serif mt-5 text-center font-bold text-6xl'>Oferta</h2>
                    <div className='flex-col'>
                        <div className='flex flex-col sm:flex-row'>
                            <Flip bottom>
                                <div className='flex sm:w-1/2 mx-10 sm:mx-0 sm:ml-16 mt-20  justify-start text-white  text-2xl leading-9 tracking-wide '>
                                    <div className='text-justify'>
                                        <p>Oprawa artystyczna imprezy w postaci pokazu tańca orientalnego w wykonaniu Oriental Show Girls to gwarancja urozmaicenia czasu Gościom na najwyższym poziomie, dzięki bogactwu kolorowych strojów, pięknej muzyce i wspaniałym tancerkom. Potrafimy zadowolić nawet najbardziej wymagającą publiczność, a nasze show na długo pozostaje w pamięci Widzów. W swojej ofercie posiadamy całą gamę orientalnego show, od występów solowych po grupowe.</p>
                                        <p>Zapewniamy oprawę artystyczną:</p>
                                        <ul>
                                            <li>• imprez firmowych i integracyjnych (eventy, konferencje, spotkania biznesowe)</li>
                                            <li>• imprez okolicznościowych o charakterze rodzinnym (wesela, urodziny, jubileusze)</li>
                                            <li>• imprez otwartych (plenerowe, tematyczne)</li>
                                            <li>• imprez zamkniętych (Sylwester, Andrzejki, etc.)</li>
                                            <li>• i innych</li>
                                        </ul>
                                        <strong className='text-yellow-200'>Nie tańczymy na wieczorach panieńskich i kawalerskich.</strong>
                                    </div>
                                </div>
                            </Flip>
                            <div className='flex sm:w-1/2  justify-start text-white  text-2xl leading-8 '>
                                <div className='mr-5 sm:-mt-72 sm:mr-0'><img src={dancer2} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-col'>
                        <div className='flex mb-10 mt-3 flex-col sm:flex-row'>
                            <div className='flex  sm:w-1/2 justify-start text-white  text-2xl leading-8 '>
                                <div className='sm:-mt-32'><img className='rounded-xl' src={dancer} /></div>
                            </div>
                            <div className='flex sm:w-1/2 mx-10 sm:mx-0 sm:ml-16  sm:pl-5  justify-start text-white  text-2xl leading-9 tracking-wide '>
                                <div className='text-jusitfy'>
                                    <Flip bottom>
                                        <p className='text-yellow-200 mb-20'>Po pokazie istnieje możliwość krótkiej zabawy (animacji) z Gośćmi imprezy poprzez naukę podstawowych figur tańca orientalnego, a następnie wspólnej improwizacji przy dźwiękach muzyki arabskiej.</p>
                                        <p>Oferujemy pokazy solowe, jak i grupowe:</p>
                                        <p>Występy solowe:</p>
                                        <ul>
                                            <li>• klasyczny taniec orientalny</li>
                                            <li>• taniec z jedwabnymi wachlarzami</li>
                                            <li>• taniec z woalem</li>
                                            <li>• taniec ze skrzydłami Izis</li>
                                            <li>• fuzja tańca brzucha z sambą</li>
                                            <li>• tabla solo - taniec do bębnów</li>
                                            <li>• taniec z shamadanem</li>
                                            <li>• taniec z laskami </li>
                                        </ul>

                                        <p>Show grupowe:</p>
                                        <ul>
                                            <li>• red show</li>
                                            <li>• fanveil show</li>
                                            <li>• show bellyrewia </li>
                                            <li>• świetlne show ze skrzydłami i świecznikiem</li>
                                            <li>• white show</li>
                                        </ul>
                                        <p className='text-yellow-200 my-20  text-2xl leading-8 text-justify mr-10'>Ofertę możemy dostosować indywidualnie do Państwa oczekiwań, pod względem różnorodności i długości pokazu, na życzenie możemy przygotować show, które będzie dopasowane do danej tematyki imprezy.
                                            Cena uzależniona jest od czasu trwania pokazu i liczby tancerek. W celu wyceny pokazu zapraszamy do kontaktu.
                                        </p>
                                    </Flip>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}