import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'

const useFirebase = () => {
  const [user, setUser] = useState({})
  const auth = getAuth()

  // sign in
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user)
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
    })
    return () => unsubscribe
  }, [])

  // sign out
  const logOut = () => {
    signOut(auth).then(() => {})
  }

  return {
    user,
    signInWithGoogle,
    logOut,
  }
}

export default useFirebase
