function Patient({ patient, setPatient, deletePatient }) {
  const { name, owner, email, phone, date, symptoms, id } = patient;

  const handleDelete = () => {
    const answer = confirm('¿Deseas eliminar este paciente?');

    if(answer) {
      deletePatient(id);
    }
  }

  return (
    <div className="m-5 lg:ml-10 bg-white shadow-md px-5 py-1 rounded-md">
        <p className="font-bold mb-3 text-gray-700 uppercase mt-5">
          Nombre: { ' ' }

          <span className="font-normal normal-case">{ name }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Dueño: { ' ' }

          <span className="font-normal normal-case">{ owner }</span>
        </p>
        
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: { ' ' }

          <span className="font-normal normal-case">{ email }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Telefono: { ' ' }

          <span className="font-normal normal-case">{ phone }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha de Alta: { ' ' }

          <span className="font-normal normal-case">{ date }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas: { ' ' }

          <span className="font-normal normal-case">{ symptoms }</span>
        </p>

        <div className="flex justify-between my-5">
          <button 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all cursor-pointer rounded-md" 
            type="button"
            onClick={ () => setPatient(patient) }
          >
            Editar
          </button>

          <button 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold transition-all cursor-pointer rounded-md" 
            type="button"
            onClick={ handleDelete }
          >
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Patient;