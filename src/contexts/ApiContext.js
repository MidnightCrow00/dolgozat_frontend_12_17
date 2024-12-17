import React, { createContext, useEffect, useState } from 'react'
import { MyAxios } from './MyAxios';

export const ApiContext=createContext("") 

export const ApiProvider=({children})=>{
    const [szakdogaLista, setSzakdogaLista]=useState([])

    const getAdat = async(vegpont, callbackfv)=>{
        try{
            const response=await MyAxios.get(vegpont);
            console.log(response)
            callbackfv(response.data)
        }catch(err){
            console.log("Hiba történt az adatok lekéreésekor!")
        }finally{

        }
    };

    const deleteAdat = async(vegpont, id)=>{
        try{
            const response = await MyAxios.delete(vegpont+"/"+id);
            console.log(response)
        }catch(err){
            console.log("Hiba történt az adatok törlésekor!")
        }finally{

        }
    }

    const putAdat =async(vegpont, id, adat)=>{
        try{
            const response =await MyAxios.put(`${vegpont}/${id}, adat`)
            console.log("Sikeres módosítás:", response.data)

            setSzakdogaLista((prevSzakdogaLista)=>
                prevSzakdogaLista.map((item)=>item.id===id?{...item,...adat}:item)
            )
        }catch(err){
            console.log("Hiba történt az adatok módosításakor!", err)
        }
    }
    const postAdat = async(vegpont, data)=>{
        try{
            const response = await MyAxios.post(vegpont+data);
            console.log("Feltöltve",response.data)
            return response.data
        }catch(err){
            console.log("Hiba történt!",err)
        }finally{

        }
    }
useEffect(()=>{
    getAdat("api/szakdogak",setSzakdogaLista)
},[])
  return (
    <ApiContext.Provider value={{szakdogaLista, setSzakdogaLista,postAdat, putAdat,deleteAdat}}>{children}</ApiContext.Provider>
  )
}
