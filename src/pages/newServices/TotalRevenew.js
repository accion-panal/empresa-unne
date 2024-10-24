import React,{ Fragment, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Head from "../../components/Head/Head";
import Banner from "../../components/PageSections/Investor/NewUnits/Banner";
import NewCard from '../../components/Card/NewCard';
import HeroCapitalizarme from "../../components/Carousel/HeroCapital";
import { NewCardProperty, mainCarouselCapitalData } from '../../data/index';

const TotalRevenew = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/servicios/renovacion-total') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
    }, [location.pathname])

    return(
        <Fragment>
            <Head title="Renovación total" />
            <section className="">
                <HeroCapitalizarme data={mainCarouselCapitalData} />
            </section>
            <section className="my-24">
                <div className="text-center pb-10">
                    <h2 className={`text-4xl lg:text-5xl font-bold text-gray-800`}>
                    Es momento tu renovación total
                    </h2>
                    <p className={`text-base px-2 pt-2 font-medium text-gray-600`}>
                    Proyectos inmobiliarios en blanco, verde o de entrega inmediata.
                    </p>
                </div>
                <div className="mx-4 text-center">
                    <h3 className={`text-xl md:text-2xl text-gray-800`}>
                        {''}
                        Invierte en simples pasos
                    </h3>
                </div>
                <div className="grid 2xl:px-48 mx-7 md:mx-40 2xl:mx-44 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-14 ">
                    {/* Section map*/}
                    {NewCardProperty.length > 0
                    ? NewCardProperty.map((e) => (
                        <NewCard key={e.id} backgroundColor="bg-[#f4f4f4]" data={e} />
                        ))
                    : null}
                </div>
            </section>
            <section className="mt-20">
                <Banner />
            </section>
        </Fragment>
    )
}


export default TotalRevenew;
