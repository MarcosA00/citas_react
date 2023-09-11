import { useState, useEffect } from 'react';
import Error from './Error';

function Form({ patients, setPatients, patient, setPatient }) {
  // Se define el state.
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [symptoms, setSymptoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setOwner(patient.owner)
      setEmail(patient.email)
      setPhone(patient.phone)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }
  }, [patient]);

  const setId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if([ name, owner, email, phone, date, symptoms ].includes('')) {
      console.log('Todos los campos deben ser llenados...')

      setError(true);
      return;
    }

    setError(false);

    // Objeto patient.
    const objPatient = {
      name,
      owner,
      email,
      phone,
      date,
      symptoms
    }

    if(patient.id) {
      // Editando registro
      objPatient.id = patient.id;

      const patientsUpdate = patients.map(patientState => patientState.id === patient.id ? objPatient : patientState);

      setPatients(patientsUpdate)
      setPatient({})
    }else {
      // Nuevo registro
      objPatient.id = setId()
      setPatients([...patients, objPatient]);
    }

    // Reiniciar formulario.
    setName('')
    setOwner('')
    setEmail('')
    setPhone('')
    setDate('')
    setSymptoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Datos del Paciente</h2>
    
      <p className="text-lg mt-5 text-center mb-10 font-bold">
        Añade Pacientes y { ' ' }

        <span className="text-indigo-600">Administralos</span>
      </p>

      <form 
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={ handleSubmit }
      >
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }

        <div className="mb-5">
          <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

          <input
            id="pet"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md normal-case"
            type="text" 
            placeholder="Nombre de la Mascota"
            value={ name }
            // Seregistra un evento para asignar un valor al state mediante una funcion de callback
            onChange={ (e) => setName(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre del Dueño</label>

          <input
            id="owner"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md normal-case"
            type="text" 
            placeholder="Nombre del Dueño"
            value={ owner }
            onChange={ (e) => setOwner(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md normal-case"
            type="email" 
            placeholder="Email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="phone" className="block text-gray-700 uppercase font-bold">Numero Celular</label>

          <input
            id="phone"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md normal-case"
            type="text" 
            placeholder="Numero Celular"
            value={ phone }
            onChange={ (e) => setPhone(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Alta</label>

          <input
            id="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md uppercase"
            type="date"
            value={ date }
            onChange={ (e) => setDate(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">Sintomas</label>

          <textarea 
            id="symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md normal-case"
            placeholder="Describe los Sintomas"
            value={ symptoms }
            onChange={ (e) => setSymptoms(e.target.value) }
          />
        </div>

        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
          type="submit"
          value={ patient.id ? 'Editar Información' : 'Agregar Paciente' }
        />
      </form>
    </div>
  )
}

export default Form