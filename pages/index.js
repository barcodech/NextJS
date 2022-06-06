import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Comps/Footer'
import Navbar from '../Comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
 
export default function Home() {
  return (
    <div>
     
      <h2 className={styles.title}>Welcome to nextapp</h2>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dignissimos adipisci maiores provident dicta nam alias saepe illo magnam at?</p>
      <Link href="/barcode">
      <a className={styles.btn}>See Listing</a>
      </Link>
     
    </div>
  )
}