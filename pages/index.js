import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSession, getSession } from "next-auth/react"
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
 

  const {data:session} = useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({session}): Guest()}
    </div>
  )
}

//Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className='text-4xl font-bold'>Guest HomePage</h3>

      <div className='flex justify-center'>
        <Link href = {"/login"}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray'>Sign In</a></Link>
      </div>
    </main>
  )
}

//Authorized user

function User({ session}){
  return(
    <main className="container mx-auto text-center py-20">
    <h3 className='text-4xl font-bold'>Authorized User HomePage</h3>

    <div className='details'>
     <h5>{session.user.name}</h5>
     <h5>{session.user.email}</h5>
    </div>

    <div className='flex justify-center'>
      <button className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50'>Sign Out</button>
    </div>

    <div className='flex justify-center'>
      <Link href = {"/profile"}><a className='mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray'>Profile page</a></Link>
    </div>
  </main>
  )
}

export async function serverSideProps({req}){
  constsession = await getSession({req})

  if(!session){
    return{
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {session}
  }
}














