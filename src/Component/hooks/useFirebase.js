import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import initializeAuthentication from './../Login/firebase/firebase.init'

initializeAuthentication()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const auth = getAuth()

  // sign in
  const signInWithGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider()

    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user)
        console.log(result.user)
      })
      .finally(() => setIsLoading(false))
  }

  // sign out
  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {})
      .finally(() => {
        setIsLoading(false)
      })
  }

  // observed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setIsLoading(false)
    })
    return () => unsubscribe
  }, [])

  return {
    user,
    isLoading,
    signInWithGoogle,
    logOut,
  }
}

export default useFirebase
