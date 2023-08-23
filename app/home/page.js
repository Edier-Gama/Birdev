'use client'

import React from 'react'
import styles from '../../styles/home.module.css'
import { useUserData } from '../../hooks/useUserData'
import { useRouter } from 'next/navigation'
import { Avatar } from '../profile/Avatar'

function Home () {
  const [tweets, setTweets] = React.useState([])
  const user = useUserData()
  const router = useRouter()
  function onChangeToProfile () {
    router.push('/profile')
  }

  React.useEffect(() => {
    async function getTweets () {
      const res = await fetch('http://localhost:3000/api/statuses/home_timeline')
      const data = await res.json()
      setTweets(data)
    }
    getTweets()
  }, [])

  return (
    <section>
      {user &&
        <header>
          <nav className={styles.headerNav}>
            <h2 className={styles.home}>Home</h2>
          </nav>
        </header>}
      <section className={styles.postContainer}>
        {tweets.map((post) => {
          return (
            <section key={post.id} className={styles.post}>
              {user && <Avatar src={user.userphoto} alt={user.username} />}
              <div className={styles.postContent}>
                <h2 key={post.id}>{post.postAuthor}</h2>
                <p>{post.postContent}</p>
              </div>
            </section>
          )
        })}
      </section>
    </section>
  )
}

export default Home
