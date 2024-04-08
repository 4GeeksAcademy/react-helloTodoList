import React from "react";
import FichaTecnica from "./FichaTecnica";

const Resumen = () =>{
    return(
        <div className="resumenOrden">
        <h6>Resumen orden</h6>
        <p>Pax: {ficha.Pax}</p>
        <p>Evento: {ficha.Evento}</p>
        <p>Hora: {ficha.Hora}</p>
        <p>Servicio: {ficha.Servicio}</p>
        <p>Entrante: {ficha.Entrante}</p>
        <p>Principal: {ficha.Principal}</p>
        <p>Postre: {ficha.Postre}</p>
        <p>Observaciones: {ficha.Observaciones}</p>
    </div>  
    );
}
export default Resumen;