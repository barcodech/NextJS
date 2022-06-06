import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Comps/Footer'
import Navbar from '../Comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
 
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h2 className={styles.title}>Welcome to nextapp</h2>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corporis adipisci exercitationem quidem quas ipsa impedit earum deleniti tempore sit!</p>
      <Link href="/barcode">
      <a className={styles.btn}>See Listing</a>
      </Link>
     
     
    </div>
    </>
  )
}