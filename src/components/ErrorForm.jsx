
const ErrorForm = ({children}) => {
  return (
    <div className="alert alert-danger text-center">
        {children}
    </div>
  )
}

export default ErrorForm