'use client'

import { auth } from '../firebase/client'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

function useUserData () {
  const [userData, setUserData] = useState()
  try {
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUserData({
          username: user.displayName,
          userphoto: user.photoURL,
          useremail: user.email
        })
      })
    }, [])
  } catch (error) {
    console.log(error)
  }
  return userData
}

export { useUserData }
