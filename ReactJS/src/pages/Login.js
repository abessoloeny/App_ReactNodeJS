import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { getPacientes } from "../services/Pacientes";
import { useForm } from "react-hook-form";

export default function Login (props) {
    const [user,setUser] = useState([]);
    //const [validUser, setValidUser] = useState(null);
    const { register, handleSubmit, formState:{errors}} = useForm();
useEffect(()=>{
    getPacientes()
        .get()
        .then((pacientes)=> {
            setUser(pacientes.data.dataPaciente)
        })
        .catch((err) => console.log(err))
},[])

   const onSubmit = (datos) =>{
       const isValid = user.filter(ele => ele.dni === datos.nombre)
       if (datos.nombre === datos.pass) {
           if (isValid !== null) {
               props.handleLogin(isValid[0].nombre)
           } else {
               console.log('El paciente no existe!!')
           }

       } else {
           alert('Datos invalidos!!!');
       }
   }
    return (
        <div className="container_login">
            <form onSubmit={handleSubmit(onSubmit)} className="login">
                <h2>Iniciar Sesion</h2>
                <div className="login_input">
                    <input type="text" 
                           placeholder="Nie o Dni"
                           name="nombre"
                           {...register('nombre', {
                            required:{
                                value: true,
                                message: " Nie o Dni requerido*"
                            }
                         })}
                    />
                </div>
                {errors.nombre && <span>{errors.nombre.message}</span> }
                <div className="login_input">
                    <input type="password" 
                           name="pass"
                           placeholder="contraseña"
                           {...register('pass',{
                            required:{
                                value: true,
                                message: "password requerido*"
                            }
                           })}
                    />
                </div>
                {errors.pass && <span>{errors.pass.message}</span>}
                <div className="login_btn">
                    <button type="submit">Iniciar sesión</button>
                </div>
                
                <Link to="/formulario" >Registrate</Link>
                
            
            </form>
        </div>
    )
}