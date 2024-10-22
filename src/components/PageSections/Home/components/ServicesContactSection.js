import React from 'react';
import HeadingSection from '../../../HeadingSection/HeadingSection';
import Button from '../../../Button/Button';
import MeetingForm from '../../../Form/MeetingForm';

const ServicesContactSection = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 pb-16">
      <div className='my-4 mt-8 text-center'>
        <h3 className='text-3xl text-gray-900'>¿Quieres agendar una reunión con nosotros?</h3>
        <p className='my-2'>Un equipo de expertos se pondran en contacto contigo</p>
      </div> 
      <div className='mx-6 md:mx-44'>
        <MeetingForm />
      </div>
      {/* <Button
        href="/soy-inversionista/unidades-en-remate"
        className="p-2 text-xl xl:p-3 text-center xl:text-2xl bg-secondary-400 hover:bg-secondary hover:shadow-md 
        w-48 sm:w-96"
      >
        Contáctanos
      </Button> */}
    </div>
  );
};

export default ServicesContactSection;
