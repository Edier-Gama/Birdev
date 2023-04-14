import Link from 'next/link'
import React from 'react'
import styles from '../../styles/home.module.css'
function Home () {
  console.log('Estoy en el home')
  return (
    <section>
      <h1 className={styles.text}>Hola, bienvenido al home</h1>
      <Link href='/profile' className={styles.text}>Ir al perfil</Link>
    </section>
  )
}

export default Home
