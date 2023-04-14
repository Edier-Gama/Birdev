import React from 'react'
import styles from '../../styles/profile.module.css'

function Avatar ({ src, alt }) {
  return (
    <section>
      <img src={src} alt={alt} className={styles.userPhotoProfile} />
    </section>
  )
}

export { Avatar }
