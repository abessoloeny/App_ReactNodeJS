import React, {useState} from "react";
import { Link} from "react-router-dom";
import estetica from '../imagenes/estetica_dental.jpg';

export default function Card(props) {
    const [cardTreat, setCardTreat] = useState(
        { title: 'Titulo', foto:{estetica}, def:'descripcion ...'}
    )
    
    return (
        <div className="container_card">
            <div className="card">
                <img src={props.cardTreat.foto} alt="tratamiento" />
                <h1>{props.cardTreat.title}</h1>
                <p>{props.cardTreat.def}</p>
            </div>
            <Link to="/"><span>Más Info</span></Link>
        </div>
    )
}