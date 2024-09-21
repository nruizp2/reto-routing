import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Detail() {
 const {mascotaId} = useParams();
 const [mascotas, setMascotas] = useState([]);
 const [mascota, setMascota] = useState({});

 const getMascota = (id) =>{
    for(let m of mascotas){
        if (m.id === parseInt(id)){
            return m
        }
    }
 }

 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setMascotas(data);
     });
 }, []);

 useEffect(() => {
    if (mascotas.length > 0) {
        setMascota(getMascota(mascotaId));
      }
 }
 , [mascotas, mascotaId])

 
 
 return (
   <div>
    <h1>{mascota.nombre}</h1>
    <img style={{width:"25%", height:"25%"}} src={mascota.foto}></img>
    <p>{mascota.raza}</p>
   </div>
 );
}