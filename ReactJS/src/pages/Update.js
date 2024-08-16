
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getPacientes, getMessages, getPatterns } from "../services/Pacientes";
import { useForm } from "react-hook-form";
//import hocPanel from "../hocs/HocPanel";


function ChangePaciente() {
    const [list, setList] = useState([]);
    const  params  = useParams();
    const navigate = useNavigate();

//funcion get
    useEffect (() => {
        getPacientes()
            .get(`${params.dni}`)
            .then((pacientes) => {
                setList(pacientes.data.paciente[0]);  
            })
            .catch(err => console.log(err));
    },[]);
const {register, handleSubmit, formState:{errors}} = useForm();

const onSubmit = (datos) => {
        putPaciente(datos);
}
    function putPaciente (newInfo) {
        getPacientes()
            .put(`${params.dni}`, {  
                direccion: `${newInfo.direccion}`,
                localidad: `${newInfo.localidad}`,
                codPostal: `${newInfo.codPostal}`,
                tel: `${newInfo.tel}`,
            })
            //props.handleToPanel();
        navigate('../pacientes')
        alert (`El paciente ${params.dni} ha sido actualizado`)
    }
   // if (!list) return "no esta en la lista"
    return (
        <div className="container_update">
            <h1>Actualización del paciente</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="new_row">
                    <label>Paciente:     {list.dni}</label>
                </div>
                <div className="new_row">
                    <label htmlFor="nombre"> Nombre</label>
                    <input type="text"   name="nombre"
                            defaultValue={list.nombre} 
                     //       {...register('nombre')}
                            readOnly
                    />
                </div>
                <div className="new_row">
                    <label htmlFor="apellidos"> Apellidos</label>
                    <input type="text"  name="apellidos" 
                            defaultValue={list.apellidos}
                       //     {...register('apellidos')}
                            readOnly/>
                </div>
                <div className="new_row">
                    <label htmlFor="direccion"> Dirección</label>
                    <input type="text" name="direccion" 
                            placeholder="Dirección"
                            defaultValue={list.direccion} 
                            {...register('direccion',{
                                required: getMessages().req
                            })}
                    />
                </div>
                {errors.direccion && <span>{errors.direccion.message}</span> }
                <div className="new_row">
                    <label htmlFor="localidad"> Localidad</label>
                    <input type="text" name="localidad" 
                            defaultValue={list.localidad} 
                            {...register('localidad', {
                                required: getMessages().req,
                                pattern: {
                                    value: getPatterns().regName,
                                    message: getMessages().errorName
                                    }
                                })
                            }  
                    />
                </div>
                {errors.localidad && <span>{errors.localidad.message}</span> }
                <div className="new_row">
                    <label htmlFor="codPostal"> Código postal</label>
                    <input type="number" 
                        id="codPostal"
                        name="codPostal"
                        defaultValue={list.codPostal} 
                        {...register('codPos', {
                            required: getMessages().req,
                            pattern: {
                                value: getPatterns().regPostal,
                                message: getMessages().errorTel
                                }
                            })
                        } 
                    />
                </div>
                {errors.codPos && <span>{errors.codPos.message}</span> }
                <div className="new_row">
                    <label htmlFor="tel"> Telefono</label>
                    <input type="number"
                            id="tel"
                             name="tel" 
                             defaultValue={list.tel} 
                             {...register('tel', {
                                required: getMessages().req,
                                pattern: {
                                    value: getPatterns().regTel,
                                    message: getMessages().errorTel
                                    }
                                })
                            }       
                    />
                </div>
                {errors.tel && <span>{errors.tel.message}</span> }
                <div className="button_new_row">
                    <button type="submit">Guardar Cambios</button>
                    <Link to="../pacientes">
                        <button>  Cancelar </button>
                    </Link>
                </div>
                
            </form>
        </div>
    )
}

export default ChangePaciente;