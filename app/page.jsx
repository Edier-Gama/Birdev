import Link from 'next/link'
import styles from '../styles/home.module.css'
function Home () {
  return (
    <header>
      <main className={styles.mainLayout}>
        <h1>Imagine a place<br />Made for devs</h1>
        <p className={styles.textMainLayout}>
          <b>Birdev</b> is a Twitter clone made for educational purposes.
          <br />Specifically, related topics on software development
          are shared
        </p>
        <div className={styles.logInText}>
          <img
            src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
            alt='Github Logo'
          />
          <Link href=''>
            LogIn with Github
          </Link>
        </div>
      </main>
    </header>
  )
}

export default Home
