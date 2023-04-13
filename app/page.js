'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { loginWithGithub } from '../firebase/client'
import styles from '../styles/home.module.css'

function Home () {
  const auth = getAuth()
  const githubLogo = 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          username: user.displayName,
          useremail: user.email,
          userphoto: user.photoURL
        })
      } else {
        setUser(null)
      }
    })
  }, [])

  function signInWithGithub () {
    loginWithGithub()
      .then(user => {
        try {
          console.log(`Bienvenido, ${user.username}`)
        } catch (err) {
          console.error(err)
        }
      })
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
        {
          user === undefined &&
            <div className={styles.logInText} onClick={signInWithGithub}>
              <img
                src={githubLogo}
                alt='Github Logo'
              />
              <Link href=''>LogIn with Github</Link>
            </div>
        }
        {user === null && <div />}
        {
          user &&
            <div>
              <img src={user.userphoto} alt='' width='100px' />
              <h1>Bienvenido, {user.username}</h1>
              <p color='white'>{user.useremail}</p>
            </div>
        }
      </main>
    </header>
  )
}

export default Home
