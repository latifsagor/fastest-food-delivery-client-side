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
  const auth = getAuth()

  // sign in
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()

    return signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user)
      console.log(result.user)
    })
  }

  // sign out
  const logOut = () => {
    signOut(auth).then(() => {})
  }

  // observed
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe
  }, [])

  return {
    user,
    signInWithGoogle,
    logOut,
  }
}

export default useFirebase
