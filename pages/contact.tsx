
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <MainLayout>
      
        <h2 className={inter.className}>Contact</h2>
        <Link href={"/"} className= 'card' replace>
          
          <h2 className={inter.className}>Ir a About</h2>
        </Link>
    </MainLayout>
  )
}
