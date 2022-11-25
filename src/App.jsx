import logo from './logo.svg';
import request, { GraphQLClient, gql } from 'graphql-request';
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from './Sections/Home';
import { Menu } from './Sections/Menu';
import { About } from './Sections/About';
import { Offer } from './Sections/Offer';
import { Video } from './Sections/Video';
import { Gallery } from './Sections/Gallery';
import { Contact } from './Sections/Contact';



function App() {
  const [data, setData] = useState(null)

  useEffect(() => {


    const getStaticProps = async () => {
      const { images } = await request(
        'https://api-eu-west-2.hygraph.com/v2/cl9wn2za667fz01td1opv64nf/master',
        `
        {
        images{
          id,
          image{
            url
          }
          }
          }
        `
      ).then((response) => setData(response))

    }
    getStaticProps()
  }, [])
  const myRefHome = useRef(null)
  const myRefAboutsUs = useRef(null)
  const myRefGallery = useRef(null)
  const myRefOffer = useRef(null)
  const myRefVideo = useRef(null)
  const myRefContact = useRef(null)

  return (
    <div className='font-link-2 '>
      <Menu myRefContact={myRefContact} myRefVideo={myRefVideo} myRefOffer={myRefOffer} myRefHome={myRefHome} myRefAboutsUs={myRefAboutsUs} myRefGallery={myRefGallery} />
      <HomePage myRef={myRefHome} />
      <About myRef={myRefAboutsUs} />
      <Gallery myRef={myRefGallery} imagesUrl={data} />
      <Offer myRef={myRefOffer} />
      <Video myRef={myRefVideo} />
      <Contact myRef={myRefContact} />
    </div>
  );
}

export default App;
