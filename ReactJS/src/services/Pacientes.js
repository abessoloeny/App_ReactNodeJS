
import axios from 'axios';
import ortodoncia from '../imagenes/ortodoncia.jpg';
import implantes from   '../imagenes/implantes.jpg';
import estetica from  '../imagenes/estetica_dental.jpg';
import periodoncia from  '../imagenes/periodoncia.jpg';
import odontologia from  '../imagenes/odontologia.jpg';
import protesis from  '../imagenes/protesis.jpg';
import infantil from  '../imagenes/infantil.jpg';
import endondoncia from  '../imagenes/endodencia.jpg';
import blanqueo from  '../imagenes/blanqueamiento.jpg'

const endPoint =  axios.create({
    baseURL: `http://localhost:3000/pacientes`
});
const opcionTreatment = [
            {id: 1, title: 'ORTODONCIA', foto:ortodoncia, def:'La ortodoncia es la especialidad que trata de corregir las maloposiciones de los dientes y de los huesos maxiliares.'},
            {id: 2, title: 'IMPLANTES', foto:implantes, def: 'Los implantes permiten solucionar la perdida de una o varias piezas dentales. '},
            {id: 3, title: 'ESTÉTICA DENTAL', foto:estetica, def: 'La estética dental es un medio muy avanzado para permitir el tratamiento en estética dental.'},
            {id: 4, title: 'PERIODONCIA', foto:periodoncia, def: 'La periodoncia ayuda a prevenir y combatir la enfermeddad periodontal.'},
            {id: 5, title: 'ODONTOLOGÍA ', foto:odontologia, def: 'La prevención siempre es la mejor solución, por ese motivo ofrecemos la forma más cómoda de mantener una optima salud dental.'},
            {id: 6, title: 'PRÓTESIS', foto:protesis, def: 'La prótesis dental fija o removible. Prótesis sobre implantes dental.'},
            {id: 7, title: 'INFANTIL', foto:infantil, def: 'Se cuida de la salud bucal de nuestros pacientes desde una temprana edad.'},
            {id: 8, title: 'ENDODONCIA', foto:endondoncia, def: 'Se cuenta en endodoncia del asesoramiento y ayuda en los pacientes a alcanzar el éxito en su tratamiento.'},
            {id: 9, title: 'BLANQUEO', foto:blanqueo, def: 'Se ofrece la posibilidad de reducir varios tonos en el color de tus dientes a través de avanzadas técnicas.'}
        ]
const messages = {
    req: "El campo es obligatorio",
    errorDNI: "Su DNI o NIE no es correcto. Ej: X1234567Q o 34567890K",
    errorName: "El formato no es correcto",
    errorTel: "Debe introducir un numero válido"
};
const patterns = {
    regNif: /^[XYZ0-9][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
    regName: /^(?=.{3,20}$)[A-ZÁÉÍÓÚ][a-zñáéíóúïèâê]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóúïèâê]+)?$/i,
    regTel: /^[0-9]{9}$/i,
    regPostal: /^[0-9]{5}$/i
}
        
export function getTreatment () {
    return opcionTreatment;
}

export function getPacientes () {
    return(endPoint );
}

export function getMessages() {
    return messages;
}

export function getPatterns () {
    return patterns;
}
/*Se puede usar esta función pero por estar de prueba seguimos con la anterior
export function getPacientesBYDNI(dni){
    return endPoint.filter(element => element.dni === dni)[0];
}*/
