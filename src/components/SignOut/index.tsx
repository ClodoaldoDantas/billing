import { HiOutlineLogout } from 'react-icons/hi'
import styles from './styles.module.scss'

export function SignOut() {
  return (
    <button className={styles.signOut} type="button">
      <HiOutlineLogout size={32} />
      Log out
    </button>
  )
}
