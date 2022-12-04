import { Menu } from '../Menu'
import { Profile } from '../Profile'
import { SignOut } from '../SignOut'
import styles from './styles.module.scss'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Profile />
      <Menu />
      <SignOut />
    </div>
  )
}
