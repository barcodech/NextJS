import Head from 'next/head'
import Image from 'next/image'
import Navbar from '..Comps/Navbar'
import styles from '../styles/Home.module.css'
import Footer from '../Comps/Footer'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <h2>Welcome to nextapp</h2>
      <Footer/>
    </div>
  )
}
