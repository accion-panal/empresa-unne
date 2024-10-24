import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../../assets/styles/components/Carousel/MainCarousel.css';
import CapitalForm from '../Form/CapitalForm';

const HeroCapitalizarme = ({ data }) => {
  return (
    <div className='relative'
    >
      {data?.length > 0
        ? data.map((slide) => (
            <div key={slide.id}>
              <img
                src={slide.img}
                alt="slide-1"
                className="bg-center bg-no-repeat bg-cover brightness-100 w-screen h-[120vh] md:h-[90vh] 2xl:h-[80vh]"
                style={{
                  backgroundPosition: 'center',
                  objectFit: 'cover',
                }}
              />

              <div className="absolute inset-0 flex items-center justify-start w-100 pl-4 xl:pl-32 bg-black bg-opacity-25">
                <div className="flex flex-col md:flex-row">
                  <div className='mt-24 my-4 md:mt-32 w-3/3 md:w-[60%] 2xl:w-2/3'>
                    <h2 className="text-2xl font-semibold xl:text-4xl pb-2 text-white drop-shadow-lg mb-2 md:mr-32 2xl:mr-40">
                      {slide.title}{' '}
                      {slide.titleTwo}
                    </h2>
                    <hr className='w-72'/>
                    <p className="text-md xl:text-xl text-white mt-2 md:mr-72  2xl:pr-32 mr-2">{slide.desc}</p>
                  </div>
                  <div className="flex flex-col w-3/3 md:w-[40%] 2xl:w-1/3 ">
                    <CapitalForm/>
                  </div>            
                </div>
            
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default HeroCapitalizarme;
