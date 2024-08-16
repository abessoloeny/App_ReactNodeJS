import React from "react";
import logo from "../imagenes/logo1.jpeg";
import { NavLink, Link } from "react-router-dom";

export default function Header (props){

    return (
        <header>
            <div className="header_title">
                <img src={logo} className="header_logo" alt="Dental Time" />
                <h1> DENTAL TIME</h1>
                <div className="conexion">
                    <div className="btn_search">
                        <input id="search" type="text" placeholder="Buscar" />
                        <i className="fa fa-search"></i>
                    </div>
                    {
                        props.user !== null ?
                        
                        <Link to='/' >
                            {props.user.name} &nbsp;
                            <span onClick={props.handleLogout} className="logout"><i className="fa fa-user"></i>
                                Logout
                            </span>
                        </Link>
                        :
                        <Link to='/login' >
                        <span ><i className="fa fa-user"></i>
                            Login
                        </span>
                    </Link>
                    }
                
                    
                        
                </div>
            </div>
            <div className="menu">
                <nav className="header_menu">
                    <ul>
                        <NavLink to="/" className={ ({isActive}) => isActive ? "active" : ""}>
                            <li className="opcion"> La Clínica </li>
                        </NavLink>
                        <NavLink to="tratamientos" className={ ({isActive}) => isActive ? "active" : ""} >
                            <li className="opcion">Tratamientos   
                                <ul>
                                    <li><a href="#">Ortodoncia</a></li>
                                    <li><a href="#">Implantes</a></li>
                                    <li><a href="#">Estética dental</a></li>
                                    <li><a href="#">Periodoncia</a></li>
                                    <li><a href="#">Odontología</a></li>
                                    <li><a href="#">Prótesis</a></li>
                                    <li><a href="#">Infantil</a></li>
                                    <li><a href="#">Endodoncia</a></li>
                                    <li><a href="#">Blanqueamiento</a></li>
                                </ul></li>  
                        </NavLink>
                        <NavLink to="medicos" className={ ({isActive}) => isActive ? "active": ""} >
                            <li className="opcion">Equipo Médico
                                <ul>
                                    <li><a href="#">Dr Francis M</a></li>
                                    <li><a href="#">Dr Karel Firstone Blond</a></li>
                                    <li><a href="#">Dra María Feliz Garcia</a></li>
                                    <li><a href="#">Dra Juana Villa</a></li>
                                    <li><a href="#">Dr Sebastian Miralles</a></li>
                                </ul></li>
                        </NavLink>
                        {
                            props?.user?.role === 'paciente' ?
                            <NavLink to="pacientes" className={ ({isActive}) => isActive ? "active": ""}>
                                <li className="opcion">pacientes</li></NavLink>
                            :
                            null
                        }
                        
                            
                        <NavLink to="especial" className={ ({isActive}) => isActive ? "active": ""}>
                            <li className="opcion">Contacto</li> </NavLink>        
                        <NavLink to="formulario" className={ ({isActive}) => isActive ? "active": ""}>
                            <li className="opcion">Registro</li> </NavLink>        
                        <NavLink to="cita"  ><li className="btn_cita" >PIDE CITA AHORA</li></NavLink>                
                        
                    </ul>
                         
                </nav>
            </div>
        </header>
    )
}