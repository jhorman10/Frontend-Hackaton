import React from 'react'
import './style.css'

function Login() {
  return (
    <div className='login-container'>
      <form className='login-form'>
        <h1>Bienvenido!</h1>
        <input type='number' placeholder='Cedula de ciudadania' />
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
        <p>¿No tienes una cuenta? <a href='/register'>Registrate</a></p>
      </form>
    </div>
  )
}

export default Login