import Patient from "./Patient"

function PatientsList({ patients, setPatient, deletePatient }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            
            <p className="text-xl mt-5 mb-10 text-center font-bold">
              Administra tus { '' }
    
              <span className="text-indigo-600">Pacientes y Citas</span>
            </p>
    
            { patients.map( patient =>(
                <Patient 
                  key = { patient.id }
                  patient = { patient }
                  setPatient = { setPatient }
                  deletePatient = {deletePatient}
                />
            ))}
        </>
      ) 
      : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            
            <p className="text-xl mt-5 mb-10 text-center font-bold">
              Agrega a { '' }
    
              <span className="text-indigo-600">un paciente</span>
            </p>
        </>
      ) }
    </div>
  )
}

export default PatientsList