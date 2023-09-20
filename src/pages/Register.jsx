import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"

const Register = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })

  const {name, email, password, password2} = formData

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
          <FaUser/>Registrar Usuario
        </h4>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>

        <div className="form-group">
            <input
              type="text"
              className="form_control"
              id='name'
              name="name"
              value={name}
              placeholder="Teclea tu Nombre"
              onChange={onChange}>
            </input>
          </div>
          
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
            <input
              type="password"
              className="form_control"
              id='password2'
              name="password2"
              value={password2}
              placeholder="Confirma tu Password"
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
export default Register