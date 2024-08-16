import React from "react";
import logoSP from "../imagenes/SinPermiso.jpg";
export default function Forbidden(){
    return (
        <div className="container_404">
            <img alt="Sin permisos" src={logoSP} />
            <p> Sin Permisos de acceso !!! Inicie Sesión Por favor.</p>
        </div>
        
    )
}