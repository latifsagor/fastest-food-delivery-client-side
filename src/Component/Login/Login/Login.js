import React from 'react'
import useAuth from './../../hooks/useAuth'

const Login = () => {
  const { signInWithGoogle } = useAuth()
  return (
    <div className="text-center py-5">
      <h2>Please login</h2>
      <button onClick={signInWithGoogle} className="btn btn-primary">
        Google Sign In
      </button>
    </div>
  )
}

export default Login
