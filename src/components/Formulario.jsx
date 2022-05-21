import { useState, useEffect } from "react"
import ErrorForm from "./ErrorForm"

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  //estados del formulario

  const [nombre, setNombre] = useState('')

  const [propietario, setPropietario] = useState('')

  const [email, setEmail] = useState('')

  const [alta, setAlta] = useState('')

  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)


  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    //validacion del formulario

    if([nombre, propietario, email, alta, sintomas].includes('')){
      console.log('hay error')
      setError(true)
      return;
    }

    setError(false)

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas     
    }


    //editando el registro del paciente
    if(paciente.id){
      objetoPaciente.id = paciente.id

      const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacienteActualizado)
      setPaciente({})

    }else{
      //nuevos registros
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])
    }

    // reinicio del formulario

    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }

  return (
      <div className="col-lg-5">
        <h2 
          className="text-center mb-4">
          Añade pacientes y <span className="text-primary">Administralos</span>
        </h2>

        <form 
          onSubmit={handleSubmit}
          className="bg-white p-5 rounded-3 shadow p-3 mb-5 bg-body rounded">

          {
            error && <ErrorForm>Todos los campos deben estar completos!</ErrorForm>
          }

          <div>
            <label
              htmlFor="mascota" 
              className="form-label fw-bold fs-6">
              Nombre Mascota
            </label>

            <input 
            id="mascota"
              placeholder="Nombre de la mascota"
              className="form-control"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
          </div>

          <div className="mt-4">
            <label
              htmlFor="Propietario" 
              className="form-label fw-bold fs-6">
              Nombre Propietario
            </label>

            <input 
              id="Propietario"
              placeholder="Nombre del propietario"
              className="form-control"
              type="text"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)} />
          </div>

          <div className="mt-4">
            <label
              htmlFor="email" 
              className="form-label fw-bold fs-6">
              Email
            </label>

            <input 
              id="email"
              placeholder="Email contacto propietario"
              className="form-control"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mt-4">
            <label
              htmlFor="alta" 
              className="form-label fw-bold fs-6">
              Alta
            </label>

            <input 
              id="alta"
              className="form-control"
              type="date" 
              value={alta}
              onChange={(e) => setAlta(e.target.value)} />
          </div>

          <div className="mt-4">
            <label
              htmlFor="sintomas" 
              className="form-label fw-bold fs-6">
              Sintomas
            </label>

            <textarea 
              id="sintomas" 
              className="form-control"
              placeholder="descripción de los sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)} >
            </textarea>
          </div>

          <input 
            type="submit" 
            className="form-control bg-primary bg-opacity-75 mt-5 fw-bold p-2" 
            value=
            {
              paciente.id ? 'Editar Paciente' : 'Agregar'
            }
          />

        </form>
      </div>
  )
}

export default Formulario