
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      <div className={styles.grid}>
        <h2 className={inter.className}>Home Page</h2>
        
        <Link href={"/about"} className= {styles.card} replace>
          
          <h2 className={inter.className}>Ir a About</h2>
        </Link>
      </div>
    </MainLayout>
  )
}
