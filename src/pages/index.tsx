import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Hello World</p>
      <a href="https://www.google.com">Google</a>
      <br></br>
      <Link href="monique">Monique</Link>
    </div>
  )
}

export default Home
