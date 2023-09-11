import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLocalStorage = () => {
      const patientsLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];

      setPatients(patientsLocalStorage)
    }

    getLocalStorage();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( patients ));
  }, [patients])

  const deletePatient = id => {
    const patientsUpdate = patients.filter( patient => patient.id !== id );
  
    setPatients(patientsUpdate);
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Form 
          patients = { patients }
          setPatients = { setPatients }
          patient = { patient }
          setPatient = { setPatient }
        />
        <PatientsList 
          patients = { patients }
          setPatient = { setPatient }
          deletePatient = { deletePatient }
        />
      </div>
    </div>
  )
}

export default App;