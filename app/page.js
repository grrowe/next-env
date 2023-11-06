import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  let TEST = process.env.TEST
  let NEXT_TEST = process.env.NEXT_TEST
  let NEXT_PUBLIC_TEST = process.NEXT_PUBLIC_TEST
  return (
    <main className={styles.main}>
      {TEST || 'NO TEST'}
      <br/>
      {NEXT_TEST || 'NO NEXT TEST'}
      <br />
      {NEXT_PUBLIC_TEST || 'NO NEXT_PUBLIC_TEST'}
    </main>
  )
}
