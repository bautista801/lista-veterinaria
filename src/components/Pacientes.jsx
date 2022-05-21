
const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {

  const {id} = paciente

  const handleEliminar = () => {

    const res = confirm('Deseas eliminar este paciente')


    if(res){
      eliminarPaciente(id)
    }
  }

  return (
    <div className="bg-white p-4 rounded-3 shadow p-3 mb-5 bg-body rounded">
          <p className="fs-6 fw-bolder">
            Nombre: <span className="fw-normal">{paciente.nombre}</span>
          </p>

          <p className="fs-6 fw-bolder">
            Propietario: <span className="fw-normal">{paciente.propietario}</span>
          </p>

          <p className="fs-6 fw-bolder">
            Email: <span className="fw-normal">{paciente.email}</span>
          </p>

          <p className="fs-6 fw-bolder">
            Fecha de Alta: <span className="fw-normal">{paciente.alta}</span>
          </p>

          <p className="fs-6 fw-bolder">
            Sintomas: <span className="fw-normal">{paciente.sintomas}</span>
          </p>

          <div className="text-center d-flex justify-content-evenly">
            <button 
              className="btn btn-warning"
              onClick={() => setPaciente(paciente)}>Editar</button>
            <button 
              className="btn btn-danger"
              onClick={handleEliminar}>Eliminar</button>
          </div>

    </div>
  )
}

export default Pacientes