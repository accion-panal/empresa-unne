import React,{ Fragment, useEffect} from "react";
import { useLocation } from "react-router-dom";
import Head from "../../components/Head/Head";
import Banner from "../../components/PageSections/Investor/NewUnits/Banner";
import NewCard from '../../components/Card/NewCard';
import HeroCapitalizarme from "../../components/Carousel/HeroCapital";
import { StepReventions, mainCarouselRevenewData } from '../../data/index';
import ReventionsSale from "../../components/Reventions/ReventionsSale";
import Reventions from "../../components/Reventions/Reventions";

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
                <HeroCapitalizarme data={mainCarouselRevenewData} />
            </section>
            <section className="my-16">
                <div className="text-center pb-10">
                    <h2 className={`text-4xl lg:text-5xl font-bold text-gray-800`}>
                    ¿Cómo te ayudamos?
                    </h2>
                </div>
                <div className="bg-gray-200 w-full h-full sm:h-48">
                    <ul className="flex flex-col sm:flex-row gap-3 justify-center p-2 px-12">
                        {StepReventions.length > 0 ? StepReventions.map(item => (
                            <li key={item.id} className="w-64 h-32 sm:my-8 flex flex-row gap-3 items-center text-black">
                                <h4 className="text-4xl font-bold">{item.number}</h4>
                                <p className="sm:mr-10 text-xl sm:text-lg">{item.desc}</p>
                            </li>
                        )):''}
                    </ul>
                </div>
            </section>
            <section>
                <Reventions/>
            </section>
            <section>
                <ReventionsSale/>
            </section>
            <section className="mt-10">
                <Banner />
            </section>
        </Fragment>
    )
}


export default TotalRevenew;
