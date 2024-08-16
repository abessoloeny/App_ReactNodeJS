
import { getPacientes, getMessages, getPatterns } from "../services/Pacientes";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


export default function FormPaciente() {
    
    const [list, setList] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const baseURL = 'http://localhost:3000/pacientes';
    const navigate = useNavigate();
   
    useEffect (() => {
        getPacientes()
            .get()
            .then((pacientes) => {
                setList(pacientes.data.dataPaciente)
        })
            .catch(err => console.log(err));
        
        },[])

    function postPaciente(infoPaciente) {
     getPacientes()
            .post(baseURL, {
                dni: `${infoPaciente.dni}`,
                nombre: `${infoPaciente.nombre}`,
                apellidos: `${infoPaciente.apellidos}`,
                direccion: `${infoPaciente.direccion}`,
                localidad: `${infoPaciente.localidad}`,
                codPostal: `${infoPaciente.codPos}`,
                tel: `${infoPaciente.tel}`,
            })
            .then ((pacientes) => {
                setList(pacientes.data.dataPaciente);
                
            })
            navigate('/pacientes')
    }
    const onSubmit = (datos) =>{
        const isValid = list.map(ele => ele.dni === datos.dni);
        if(isValid === null){
            postPaciente(datos);
            alert(`el paciente ${datos.dni} ha sido añadido`);
        }else{
            alert(`el paciente ${datos.dni} Ya existe.  `)
            reset();
        }
        
    }

    return (
        <div className="container_form">            
            <h1>Alta del paciente</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="data_form">
                    <label htmlFor="dni">Dni</label>
                    <input type="text" name="dni"
                        {...register('dni', {
                            required: getMessages().req,
                            pattern:{
                                value: getPatterns().regNif,
                                message: getMessages().errorDNI
                                }

                            })
                        }
                    />                         
                </div>
                {errors.dni && <span>{errors.dni.message}</span> }
                <div className="data_form">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" 
                        {...register('nombre', {
                            required: getMessages().req,
                            pattern: {
                                value: getPatterns().regName,
                                message: getMessages().errorName
                                }
                            })
                        }
                    />
                </div>
                {errors.nombre && <span>{errors.nombre.message}</span> }
                <div className="data_form">
                    <label htmlFor="apellidos">Apellidos</label>
                    <input type="text" name="apellidos" 
                        {...register('apellidos', {
                            required: getMessages().req,
                            pattern: {
                                value: getPatterns().regName,
                                message: getMessages().errorName
                                }
                            })
                        }
                    />
                </div>
                {errors.apellidos && <span>{errors.apellidos.message}</span> }
                <div className="data_form">
                    <label htmlFor="direccion">Dirección</label>
                    <input type="text" name="direccion" 
                     {...register('direccion')}
                    />
                </div>
                <div className="data_form">
                    <label htmlFor="localidad">Localidad</label>
                    <input type="text" name="localidad" 
                        {...register('localidad', {
                            pattern: {
                                value: getPatterns().regName,
                                message: getMessages().errorName
                                }
                            })
                        }  
                    />
                </div>
                {errors.localidad && <span>{errors.localidad.message}</span> }
                <div className="data_form">
                    <label htmlFor="codPostal">Código postal</label>
                    <input type="number" name="codPostal" 
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
                  {errors.codPos && <span>{errors.codPostal.message}</span> }
                <div className="data_form">
                    <label htmlFor="tel">Telefono</label>
                    <input type="number" name="tel" 
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
                <div className="button_form">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}