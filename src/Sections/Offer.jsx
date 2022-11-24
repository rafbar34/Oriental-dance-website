import React from 'react';
import { gql } from 'graphql-request';
import dancer from '../assets/img6.jpg';
import dancer2 from '../assets/img9WithoutBg.png';
import Flip from 'react-reveal/Fade';

export const Offer = ({myRef}) => {
    return (
        <div>
        <div ref={myRef} className='flex bg-black bg-[center_top_-13rem] bg-fixed bg-cover min-h-screen h-full'>
            <div className='flex flex-col w-full  mt-[10%]'>
                <h2 className='text-yellow-200 font-serif text-center font-bold text-6xl'>Oferta</h2>
                <div className='flex-col'>
                    <div className='flex'>
                        <Flip bottom>
                        <div className='flex w-1/2 ml-16 mt-20  justify-start text-white  text-2xl leading-9 tracking-wide '>
                            <div>
                                <p>Oprawa artystyczna imprezy w postaci pokazu tańca orientalnego w wykonaniu Oriental Show Girls to gwarancja urozmaicenia czasu Gościom na najwyższym poziomie. Bogactwo kolorowych strojów, pięknej muzyki i wspaniałych tancerek, potrafimy zadowolić nawet najbardziej wymagającą publiczność, a nasze show na długo pozostaje w pamięci widzów. W swojej ofercie posiadamy całą gamę orientalnego show, od występów solowych po występy grupowe.</p>
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
                        <div className='flex w-1/2 justify-start text-white  text-2xl leading-8 '>
                            <div><img src={dancer2} /></div>
                        </div>
                    </div>
                </div>
                <div className='flex-col'>
                    <div className='flex mx-10'>
                        <div className='flex w-1/2 justify-start text-white  text-2xl leading-8 '>
                            <div className=''><img className='rounded-xl' src={dancer} /></div>
                        </div>
                        <div className='flex w-1/2 ml-16 items-center pl-5  justify-start text-white  text-2xl leading-9 tracking-wide '>
                            <div>
                            <Flip bottom>
                                <p className='text-yellow-200'>Po pokazie istnieje możliwość krótkiej zabawy (animacji) z Gośćmi imprezy poprzez naukę podstawowych figur tańca orientalnego, a następnie wspólnej improwizacji przy dźwiękach muzyki arabskiej.</p>
                                <p>Oferujemy pokazy solowe jak i grupowe:</p>
                                <p>Występy Solowe :</p>
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
                                    <li>red show</li>
                                    <li>fanveil show</li>
                                    <li>show bellyrewia </li>
                                    <li>świetlne show ze skrzydłami i świecznikiem</li>
                                    <li> show</li>white
                                </ul>
                                </Flip>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-yellow-200 my-20  text-2xl leading-8 text-center mx-10'>Ofertę możemy dostosować indywidualnie do Państwa oczekiwań, pod względem różnorodności i długości pokazu, na życzenie możemy przygotować show, które będzie dopasowane do danej tematyki imprezy.
                    Cena uzależniona jest od czasu trwania pokazu i liczby tancerek. W celu wyceny pokazu zapraszamy do kontaktu.
                </p>
            </div>
        </div>
        </div>
    )
}