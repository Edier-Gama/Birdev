'use client'

import Link from 'next/link'
import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginWithGithub } from '../firebase/client'
import styles from '../styles/landing.module.css'
import githubLogo from '../public/github_logo.png'

function Home () {
  const auth = getAuth()
  const router = useRouter()
  const [authState, setAuthState] = useState('loading')

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setAuthState(user ? 'loggedIn' : 'loggedOut')
    })
  }, [])

  function signInWithGithub () {
    loginWithGithub()
  }

  const redirectToHome = () => {
    router.push('/home')
  }
  return (
    <header>
      <main className={styles.mainLayout}>
        <h1>Imagine a place<br />Made for devs</h1>
        <p className={styles.textMainLayout}>
          <b>Birdev</b> is a Twitter clone made for educational purposes.
          <br />Specifically, related topics on software development
          are shared
        </p>
        {authState === 'loading' && <div />}
        {authState === 'loggedIn' && redirectToHome()}
        {authState === 'loggedOut' &&
          <div className={styles.logInText} onClick={signInWithGithub}>
            <img src={githubLogo.src} alt='Github Logo' />
            <Link href=''>LogIn with Github</Link>
          </div>}
      </main>
    </header>
  )
}

export default Home
