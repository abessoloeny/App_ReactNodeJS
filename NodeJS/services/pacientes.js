const express = require('express');
const app = express();

const dataPaciente = [
    {
        dni: '75106015K',
        nombre: 'Fran',
        apellidos: 'Ramón García',
        direccion: 'Avd los planetas 20 3ºC',
        localidad: 'Parla',
        codPostal: '28033',
        tel: '600543995' 
    },
    {
        dni: '53204598C',
        nombre: 'Elena',
        apellidos: 'De la Fuente Toledo',
        direccion: 'C/ San Cristobal 12',
        localidad: 'Oviedo',
        codPostal: '33001',
        tel: '663202012' 
    },      
    {
        dni: '20334545E',
        nombre: 'Jorge',
        apellidos: 'Riojas Fabiano',
        direccion: 'C/ San Cristobal 2',
        localidad: 'Valladolid',
        codPostal: '47009',
        tel: '635458800' 
    },      
    {
        dni: '76003967C',
        nombre: 'Fran',
        apellidos: 'Mariani Gonzalez',
        direccion: 'Gran vía 5',
        localidad: 'Madrid',
        codPostal: '28033',
        tel: '656904554' 
    },     
    {
        dni:'98343434F',
        nombre: 'Casandra Amalia',
        apellidos: 'Coello Paredes',
        direccion: 'C/de David Corominas 97, 6',
        localidad: 'Zaragoza',
        codPostal: '50582',
        tel:  '653000101'
    },       
    {
        dni:'X4595229K',
        nombre: 'Leonardo',
        apellidos: 'Villa',
        direccion: 'calle Reyes Católicos 57',
        localidad: 'Burgos',
        codPostal: '09301',
        tel:  '712353139'
    },       
    {
        dni:'Y2202192Z',
        nombre: 'Gracy',
        apellidos: 'Matas Shelly',
        direccion: 'Ctra Villena 3',
        localidad: 'Palencia',
        codPostal: '34450',
        tel:  '787395977'
    },       
    {
        dni:'54042392L',
        nombre: 'Matias Carbon',
        apellidos: 'Zaragoza',
        direccion: 'c/Henan Cortes 27',
        localidad: 'Madrid',
        codPostal: '28970',
        tel:  '751895755'
    },       
    {
        dni:'39798343T',
        nombre: 'Lleila',
        apellidos: 'Banega Cortés',
        direccion: 'c/ Cañada del Rosal 12',
        localidad: 'Huelva',
        codPostal: '21570',
        tel:  '773138276'
    },       
    {
        dni:'X3734195X',
        nombre: 'Victor ',
        apellidos: 'Casado Leon',
        direccion: 'c/Eusebio Dávilla 32',
        localidad: 'Sevilla',
        codPostal: '41540',
        tel:  '614255994'
    },       
    {
        dni:'55051550Q',
        nombre: 'Sirena Katy',
        apellidos: 'Laviña',
        direccion: 'c/Padre Caro 22',
        localidad: 'Cuidad Real',
        codPostal: '13610',
        tel:  '670909124'
    },       
    {
        dni:'33975676M',
        nombre: 'Jorge',
        apellidos: 'Caña Santiago',
        direccion: 'c/Sancampo 69',
        localidad: 'Salamanca',
        codPostal: '37621',
        tel:  '698984541'
    },       
    {
        dni:'Y9182734G',
        nombre: 'Sorraya',
        apellidos: 'Machacon Goméz',
        direccion: 'Puerto Lugar 9',
        localidad: 'Torrox',
        codPostal: '29770',
        tel:  '691857771'
    },       
    {
        dni:'67763223D',
        nombre: 'Gabi Martinez',
        apellidos: 'Sebastian Libre',
        direccion: 'Plazuela do Porto 33',
        localidad: 'Terradillos',
        codPostal: '37893',
        tel:  '609144569'
    },       
    {
        dni:'9945899K',
        nombre: 'Natacha',
        apellidos: 'Wallas Sierra',
        direccion: 'C/ Arrana 66',
        localidad: 'Elche de la Sierra',
        codPostal: '02430',
        tel:  '785373386'
    },       
    {
        dni:'X3425125A',
        nombre: 'Quion ',
        apellidos: 'Lee Xi',
        direccion: 'Avd Alameda Sundheim 88',
        localidad: 'Valdepeña de Jaén',
        codPostal: '23150',
        tel:  '610199871'
    },       
    {
        dni:'44004440P',
        nombre: 'Juan José',
        apellidos: 'Poncio Toral',
        direccion: 'C/Altamina 62',
        localidad: 'Tomiño',
        codPostal: '36740',
        tel:  '748465474'
    },       
    {
        dni:'Z9191189P',
        nombre: 'Paolo',
        apellidos: 'Ndong Nguema',
        direccion: 'Avda Andalucia 98',
        localidad: 'La Rioja',
        codPostal: '26135',
        tel:  '668317568'
    },       
    {
        dni:'77012779G',
        nombre: 'Manuel ',
        apellidos: 'Vives Ruiz',
        direccion: 'c/Angosto 79',
        localidad: 'Cabra del Santo Cristo',
        codPostal: '23350',
        tel:  '639229480'
    },       
    {
        dni:'45040905I',
        nombre: 'Laplace',
        apellidos: 'Montevalla ',
        direccion: 'C/Enxertos 56',
        localidad: 'Peñaparda',
        codPostal: '37523',
        tel:  '655755955'
    },       
    
];

app.get('', (req, res) => {
    res.status(200).json({
        message: "Lista de paciente: ",
        dataPaciente
    });
})

app.get('/:id', (req, res) => {
    const valor = dataPaciente.filter(elem => {
        return elem.dni === req.params.id;
    })
   
    res.status(200).json({
        message: `el usuario con dni o nie: ${req.params.id} es:`,
        paciente: valor
    })
})

const  validPaciente = (data) =>{
    let valid = false;
        const regexNom = /^(?=.{3,20}$)[A-ZÁÉÍÓÚ][a-zñáéíóúïèâê]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóúïèâê]+)?$/i.test(data.nombre);
        const regexApe = /^(?=.{3,20}$)[A-ZÁÉÍÓÚ][a-zñáéíóúïèâê]+(?: [A-ZÁÉÍÓÚ][a-zñáéíóúïèâê]+)?$/i.test(data.apellidos);
        const regexDni = /^[XYZ0-9][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(data.dni);
        const regexTel =  /^[0-9]{9}$/i.test(data.tel);
        const regexCod =  /^[0-9]{5}$/i.test(data.codPostal);
    
        (regexNom &&  regexApe && regexDni && regexTel && regexCod) ? 
            valid= true 
        : 
            valid = false

    return valid;
    }
app.post('/', (req, res) => {
    if(!req.body) {
        return res.status(404).json({
            message: 'FATAL ERROR. Introduce un objeto.'
        })
    }
    if(!validPaciente(req.body)){
        return res.status(404).json({
            message: 'FATAL ERROR. Los datos no son válidos'
        })
    }
    dataPaciente.push(req.body);
    return  res.status(200).json({
        message: 'Nuevo Paciente:',
        paciente: dataPaciente[dataPaciente.length -1]
    })
})

app.put('/:id', (req, res) => {
    if(!req.body || !req.params.id) {
        return res.status(400).json({
            message: 'NO HAY PARAMETROS...'
        })
    }
    const index = dataPaciente.findIndex(elem => {
        return elem.dni === req.params.id;
    })
    if(index.length <= 0) {
        return res.status(404).json({
            message: 'NO EXISTE ESTE DNI.'
        })
    }
    for ( let a in req.body) {
        dataPaciente[index][a] = req.body[a]
    }
    return res.status(200).json({
        message: 'Actualizado',
        paciente: dataPaciente[index]
    })
})

app.delete('/:id', (req, res) => {
    if(!req.params.id) {
        return res.status(404).json({
            message: 'NO HAY DATOS. Introduce un DNI'
        })
    }
    const index = dataPaciente.findIndex(elem => {
        return elem.dni === req.params.id;
    })
    if(index.length <= 0) {
        return res.status(404).json({
            message: 'NO EXISTE ESTE DNI.'
        })
    }
    const deletedPaciente = dataPaciente.splice(index,1);
    return res.status(200).json({
        message: 'DNI Borrado...',
        deletedPaciente
    })
})

module.exports = app;