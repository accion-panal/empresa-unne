import { StepReventionsHowSales } from "../../data";


const ReventionsSale = () => {
    return(
        <div className="grid grid-cols-2 p-2 px-12 mx-24 mb-6">
            <div className="col-span-1">
                <ul className="flex flex-col items-center gap-4">
                    {StepReventionsHowSales.length > 0 ? StepReventionsHowSales.map(item => (
                        <li
                            key={item.id}
                            className="bg-gray-600 text-gray-50 flex flex-row items-center gap-2 rounded-sm w-80 h-20 p-2 px-6 hover:scale-105 duration-150">
                            <h4 className="text-xl font-bold w-16">{item.number}</h4>
                            <p className="sm:mr-1 text-xl sm:text-sm">{item.desc}</p>
                        </li>
                    )):''}
                  
                </ul>
            </div>
            <div className="col-span-1 text-gray-800 sm:mt-16">
                <h3 className=" font-semibold mr-24 text-5xl mb-4">¿Cómo se aplica Renovación Total en venta?</h3>
                <div className="h-4 w-40 bg-gray-800 mb-10"></div>
                <p className="text-gray-700 text-lg mr-48">
                En el caso de los <b>venta</b>, una vez
                aprobado el presupuesto de los
                trabajos a realizar:
                </p>
            </div>
        </div>
    )
}

export default ReventionsSale;