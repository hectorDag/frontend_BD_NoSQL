import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"

const Login = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const {email, password} = formData

  const onChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h4>
          <FaSignInAlt/>Login
        </h4>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          
          <div className="form-group">
            <input
              type="email"
              className="form_control"
              id='email'
              name="email"
              value={email}
              placeholder="Teclea tu Email"
              onChange={onChange}>
            </input>
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form_control"
              id='password'
              name="password"
              value={password}
              placeholder="Teclea tu Password"
              onChange={onChange}>
            </input>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">Registrar</button>
          </div>

        </form>
      </section>
    </>
  )
}
export default Login