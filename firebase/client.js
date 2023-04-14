'use client'

import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GithubAuthProvider }
  from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCMOMXncccG8kYZSfsU8oCQ8Q2w4gS7I8Q',
  authDomain: 'birdev-777.firebaseapp.com',
  projectId: 'birdev-777',
  storageBucket: 'birdev-777.appspot.com',
  messagingSenderId: '1072426825218',

  appId: '1:1072426825218:web:e55d6bde90a52db253d91b',
  measurementId: 'G-JZXYB0RXT1'
}

const mapUsersDataToObject = (result) => {
  const user = result.user
  if (!user) {
    return null
  }
  return {
    username: user.displayName,
    userPhoto: user.photoURL,
    userEmail: user.email
  }
}
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const provider = new GithubAuthProvider()

const loginWithGithub = () => {
  return signInWithPopup(auth, provider)
    .then(user => {
      return mapUsersDataToObject(user)
    })
}

export { loginWithGithub, auth }
