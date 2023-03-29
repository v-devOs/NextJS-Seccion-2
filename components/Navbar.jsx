import { ActiveLink } from "./ActiveLink"
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      <ActiveLink href="/" name={'Home'}/>
      <ActiveLink href="/contact" name={'Contact'}/>
      <ActiveLink href="/about" name={'About'}/>
    </nav>
  )
}
