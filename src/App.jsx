import { useState, useEffect } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('listapacientes')) ?? [])

  const [paciente, setPaciente] = useState({})

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('listapacientes')) ?? [];
  //     setPacientes(pacientesLS)
  //   } 
  //   obtenerLS();
  // }, [])


  useEffect(() => {
    localStorage.setItem('listapacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizado)
  }

  return (
    <div className="container mt-5">
      <Header />
      <div className="d-flex row mt-5">
        <Formulario 
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes 
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        
      </div>
    </div>
  )
}

export default App
