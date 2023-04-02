
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'
import { DarkLayout } from '@/components/layouts/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    

    <div className='grid'>
      <h2 className={inter.className}>About</h2>
      <Link href={"/"} className= 'card'>
        
        <h2 className={inter.className}>Ir a Home</h2>
      </Link>
    </div>
      
  )
}

AboutPage.getLayout = function getLayout(page){
  <MainLayout>
    {page}
  </MainLayout>
}