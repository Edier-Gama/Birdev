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
          <h1>Soy tu perfil</h1>
          <Avatar src={user.userphoto} alt='tu foto de perfil' />
          <p>{user.username}</p>
        </main>}

    </section>
  )
}

export default Profile
