import React from 'react';
import { useState, useEffect } from 'react';
import { iconsList } from '../../../../components/Icons/index';
import { Fade } from 'react-awesome-reveal';
import HeadingSection from '../../../HeadingSection/HeadingSection';
import { Link } from 'react-router-dom';
import IndexGestion from '../../../Icons/custom/indexGestion';
import IndexInversion from '../../../Icons/custom/indexInversion';
import IndexServicios from '../../../Icons/custom/indexServicios';
import { cardSolutionsData } from '../../../../data';

const Information = () => {
  const {
    IoIosArrowDown,
    RiUserSearchFill,
    BsBarChartFill,
    GiMoneyStack,
    TbPigMoney,
    TbArrowBigRightFilled,
    TbArrowBigDownFilled,
  } = iconsList;

  return (
    <Fade delay={300} direction="right" triggerOnce={true}>
      <HeadingSection
        title="¡Tenemos la solución perfecta diseñada para ti!"
      />
      <div className="">
        <div className="flex flex-wrap flex-row items-center justify-center  w-full">
          <div className="flex flex-wrap justify-center px-10 pb-10 m-2  text-center items-stretch">
            { cardSolutionsData.length > 0 ? cardSolutionsData.map(data => (
              <div className="card w-80 min-h-[23.5rem] m-6 group  bg-gray-200 shadow-xl hover:scale-110 transition duration-500">
              <div>
                <figure className="px-8 pt-8 group-hover:text-orange-400 duration-300">
                  <p className='text-[160px]'>{data.img}</p>
                  {/* <RiUserSearchFill size="6rem" color="grey" /> */}
                  {/* <IndexInversion width={120} height={120} viewBox="0 0 512 512" className='text-[#808080]'/> */}
                </figure>
                </div>
                <div className="card-body items-center text-center">
                  <div>
                    <h2 className="card-title text-gray-800 uppercase">{data.title}</h2>
                  </div>

                  <div>
                    <p className="text-gray-600 text-start">
                          {data.desc}
                    </p>
                  </div>
                  <div className='h-full flex items-end'>
                      <Link to={data.href} className='text-gray-50 p-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 duration-150'>Más Información</Link>
                  </div>
                </div>
              </div> 
            ))  
            
            : '' }
          

            {/* <div className="card w-80 min-h-[23.5rem]  m-6 bg-gray-200 shadow-xl hover:scale-110 transition duration-500">
              <div>
                <figure className="px-10 pt-10">
                
                  <IndexGestion width={120} height={120} viewBox="50 30 430 430" className='text-[#808080]' />
                </figure>
              </div>

              <div className="card-body items-center text-center">
                <div>
                  <h2 className="card-title text-gray-800">Gestión de crédito Hipotecario</h2>
                </div>

                <div>
                  <p className="text-gray-600">
                  Cuenta con el apoyo y respaldo de los mejores bancos del país para obtener el financiamiento de hasta un 90%, para comprar tu propiedad nueva o usada.
                  </p>
                </div>
                <div className='h-full flex items-end'>
                    <Link to='/soy-inversionista/unidades-nuevas' className='text-black hover:text-orange-500'>Mas Información</Link>
                </div>
              </div>
            </div>

            <div className="card w-80 min-h-[23.5rem] m-6 bg-gray-200 shadow-xl hover:scale-110 transition duration-500">
              <div>
                <figure className="px-10 pt-10">
                  
                  <IndexServicios width={120} height={120} viewBox="0 0 512 512" className='text-[#808080]'/>
                </figure>
              </div>
              <div className="card-body items-center text-center">
                <div>
                  <h2 className="card-title text-gray-800">Servicios Legales Unne</h2>
                </div>
                <div>
                  <p className="text-gray-600">
                  Nuestro equipo legal especializado en temas inmobiliarios te brindará soluciones integrales durante todo el proceso, de manera rápida y exitosa. Somos especialistas en resolver conflictos y controversias en inmuebles.
                  </p>
                </div>
                <div className='h-full flex items-end'>
                    <Link to='/eres-corredor/servicios-legales' className='text-black hover:text-orange-500'>Mas Información</Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Information;

