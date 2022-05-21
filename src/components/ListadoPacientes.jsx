import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
      <div className="col-lg-7">
        {
          pacientes && pacientes.length ? (
            <>
              <h2 
                className="text-center mb-4">
                Lista de <span className="text-primary">Pacientes</span>
              </h2>

              {
                pacientes.map( paciente => (
                  <Pacientes 
                    key={paciente.id}
                    paciente={paciente}
                    setPaciente={setPaciente} 
                    eliminarPaciente={eliminarPaciente}
                  />            
                ))
              }

            </>

          ) : (
            <>
              <h2 
                className="text-center mb-4">
                No hay nuevos <span className="text-primary">Pacientes</span>
              </h2>
            </>
          )
            
          
        }

      </div>
  )
}

export default ListadoPacientes