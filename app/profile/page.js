'use client'

import { Avatar } from './Avatar'
import styles from '../../styles/profile.module.css'
import { useUserData } from '../../hooks/useUserData'

function Profile () {
  const user = useUserData()

  return (
    <section>
      {user === undefined && <div />}
      {user &&
        <main>
          <h1 className={styles.text}>Soy tu perfil</h1>
          <Avatar src={user.userphoto} alt='tu foto de perfil' />
          <p className={styles.text}>{user.username}</p>
          <p className={styles.text}>{user.useremail}</p>
        </main>}

    </section>
  )
}

export default Profile
