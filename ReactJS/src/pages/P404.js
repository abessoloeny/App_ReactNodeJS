import React from "react";
import { Link } from "react-router-dom";
import logo404 from '../imagenes/404.jpeg'


export default function P404 () {
    return (
     
            <div className="container_404">
                <img alt="P404" src={logo404} />
                <h2>Ups!!!</h2> 
                <p>Página disponible muy pronto !! Disculpa las molestias.</p>
                 <Link to="/">
                    <button> Inicio </button>
                 </Link>
            </div>
    )
}