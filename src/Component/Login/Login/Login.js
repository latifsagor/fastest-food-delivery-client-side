import React from 'react'
import { useHistory, useLocation } from 'react-router'
import useAuth from './../../hooks/useAuth'

const Login = () => {
  const { signInWithGoogle } = useAuth()

  const location = useLocation()
  const history = useHistory()
  console.log('Came from', location)
  const redirect_uri = location?.state?.from || '/home'

  const handleUsingGoogle = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri)
    })
  }
  return (
    <div className="text-center py-5">
      <h2>Please login</h2>
      <button onClick={handleUsingGoogle} className="btn btn-primary">
        Google Sign In
      </button>
    </div>
  )
}

export default Login
