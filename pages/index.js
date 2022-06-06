import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
 
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
   
      <Link href="/barcode/">
        <a>See Listing</a>
      </Link>
      <Footer />
    </div>
  )
}