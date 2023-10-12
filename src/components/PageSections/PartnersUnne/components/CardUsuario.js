import React from "react";

const CardUsuario = () => {
    return (
        <>
            <div className="card p-2 w-full h-auto lg:w-[100%] 2xl:w-[26%] 2xl:h-auto overflow-hidden  m-6 bg-white ring-2 ring-primary ring-offset-4 xl:bg-primary hover:bg-white xl:ring xl:ring-primary xl:hover:ring-offset-4 xl:hover:scale-105 transition duration-300 border-primary-400 shadow-2xl xl:hover:shadow-2xl text-black xl:text-white xl:hover:text-black cursor-default">
                <div className="card-header">
                    <div className="flex justify-start">
                        <span className="p-2 font-medium text-sm">Ejecutivo</span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex  p-5 py-2 mt-2  bg-white rounded-full w-[200px]  hover:backdrop-blur-sm bg-primary-400/30 cursor-pointer">
                        <img className="w-[170px] h-[170px] p-4  " src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1691681678/Projects/unne/img/experienciaUsuarios/hombre.png"/>
                    </div>
                </div>
             
                <div className="card-body items-center text-center">
                    <ul className="block list-none mb-2">
                        <li className="font-semibold text-base">Fabian Astete Salas</li>
                        <li className="font-normal text-sm">Fabian.salas.astete@gmail.com</li>
                        <li className="font-normal text-sm">+56 9 216 182 26</li>
                    </ul>
                    <ul className="flex list-none justify-between mb-2">
                        <li className="font-normal text-sm px-3 pr-8">
                            <p className="font-semibold text-sm break-words">Publicaciones</p>
                            <p className="font-light text-sm">2</p>
                        </li>
                        <li className="font-normal text-sm px-3 pl-5">
                            <p className="font-semibold text-sm">Página web</p>
                            <p className="font-light text-sm">Si</p>
                        </li>
                    </ul>
                    <div className="flex justify-center">
                        <button className="p-2 w-60 bg-secondary text-white rounded-xl font-semibold text-base" type="button" >Ver página web</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardUsuario;