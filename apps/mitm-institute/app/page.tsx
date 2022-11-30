'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AllHTMLAttributes, useEffect, useState } from 'react'
import { NextWrappers } from 'ui'
import styles from './page.module.css'
import styled from 'styled-components'

// export const TestW = ({ className }: AllHTMLAttributes<'span'>) => {
//   return <span className={className}>tes1t</span>
// }

// const TestE = styled(TestW)`
//   display: flex;
// `

export default function Home() {
  const [state, setState] = useState(false)

  useEffect(() => {
    setState(true)
  }, [])

  return (
    <div className={styles.container}>
      {/* <TestE /> */}
      {state && <p id='123'>123</p>}
      <Link href='/' target={'_blank'}>
        123
      </Link>
      <NextWrappers.Link href='/' className='test' target={'_blank'} rel=''>
        1
      </NextWrappers.Link>
      {/* <Image src='/' width={0} height={0} alt=''>
        123
      </Image> */}
      <NextWrappers.Image src='/' width={100} height={100} alt='test' />
      {/* <NextWrappers.Image
        src='/'
        width={100}
        height={100}
        alt='test'></NextWrappers.Image> */}
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js 13!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>app/page.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href='https://beta.nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js 13</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>

          <a
            href='https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.card}>
            <h2>Deploy &rarr;</h2>
            <p>Deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
