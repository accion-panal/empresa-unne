import React from "react";

const FiltersPartners = () => {
 return (
    <>
         <div className="flex flex-row flex-wrap ">
            <div className="basis-2/3 my-4 justify-start align-text-bottom">
                <span className=" flex font-semibold ">Total de <span className="font-normal px-2"> 30 socios Unne</span></span>
            </div>
        </div>
        <div className="grid grid-cols-1 xl:flex xl:flex-row xl:flex-wrap ">
            <div className="grid grid-cols-1 basis-1/3 my-7 justify-start ">
                <label className="mr-2"></label>
                <input className="border rounded-xl border-2 w-full xl:w-[50%] p-2 outline-none focus:outline-none" type="text" name="search" id="search" placeholder="Buscar por.." />
            </div>
            <div className="grid grid-cols-1  xl:basis-1/3 my-7">
                <label className="mr-2">Tipo de socios</label>
                <input className="border rounded-xl border-2 w-full xl:w-[50%] p-2 outline-none focus:outline-none" name="filterUsu" id="filterUsu" type="text" placeholder="Agentes" list="typeSocio"/>
                        <datalist id="typeSocio">
                            <option value="Agente"></option>
                            <option value="Ejecutivo"></option>
                        </datalist>
            </div>
            <div className="grid grid-cols-1  xl:basis-1/3 my-7">
                <label className="mr-2 ">Cantidad de Publicaciones</label>
                <input  className="border rounded-xl border-2 w-full xl:w-[50%] p-2 outline-none focus:outline-none" name="filterCant" id="filterCant" placeholder="1" list="cantProp" />
                <datalist id="cantProp">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </datalist>
            </div>
        </div>

    </>
 )
}

export default FiltersPartners;