
import {useState, useEffect } from "react";
import { getPacientes} from '../services/Pacientes';
import { useParams , Link, useNavigate} from "react-router-dom";

export default function Delete () {
    const [list, setList] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        getPacientes()
            .get(`${params.dni}`)
            .then((pacientes) => {
                setList(pacientes.data.paciente[0])
        })
        .catch(err => console.log(err));      
    },[]);

   function DeletePaciente(){
        getPacientes()
             .delete(`${params.dni}`)
             .then(() => {
                
                setList(null);                     
            })
            .catch(err => console.log(err));   
            navigate('../pacientes');
            alert(`Paciente ${params.dni} ha sido BORRADO!!`)
    }
           
return (
    <div className="container_delete">
        <h2>Deseas borrar el paciente {params.dni} ?</h2>
        <div className="btn_delete">
            <button onClick={DeletePaciente}>Aceptar</button>
            <Link to='../pacientes'><button>Cancelar</button></Link>
        </div>
        
    </div>
)
}