import { getPacientes} from "../services/Pacientes";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TablaPaciente() {

    const [list, setList] = useState([]);

        useEffect (() => {
            getPacientes()
                .get()
                .then((pacientes) => {
                    setList(pacientes.data.dataPaciente)
            })
            .catch(err => console.log(err));
            
        },[])
        
if(!list) return null;
    return (
        <div className="container_table">
            <h1> Lista de pacientes</h1>
            <span>Los pacientes dados de Altas en DENTAL TIME. Ponte en contacto con administración o pinchando aquí. 
                <Link to="/registro" className="alta_paciente">ALTA</Link>
            </span>
            <table>
                <thead>
                    <tr>
                        <th>Dni </th>
                        <th>Nombre </th>
                        <th>Apellidos </th>
                        <th>Dirección </th>
                        <th>Localidad </th>
                        <th>Código postal </th>
                        <th>Telefono </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    list.map(data => {
                            return (
                                <tr key={data.dni}>
                                    <td>{data.dni}</td>
                                    <td>{data.nombre}</td>
                                    <td>{data.apellidos}</td>
                                    <td>{data.direccion}</td>
                                    <td>{data.localidad}</td>
                                    <td>{data.codPostal}</td>
                                    <td>{data.tel}</td>
                                    <td className="button-table">
                                    <Link to={`update/${data.dni}`}><button type="text">Actualizar</button></Link> 
                                    <Link to={`delete/${data.dni}`}><button type="submit">Eliminar</button></Link>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}