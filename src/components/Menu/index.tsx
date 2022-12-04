import { useState, MouseEvent } from 'react'
import {
  HiOutlineChip,
  HiOutlineLockClosed,
  HiOutlineMail,
  HiOutlineCash,
  HiOutlineViewGrid,
} from 'react-icons/hi'

import cx from 'classnames'
import styles from './styles.module.scss'

const menuItems = [
  { icon: HiOutlineChip, title: 'General' },
  { icon: HiOutlineLockClosed, title: 'Password' },
  { icon: HiOutlineMail, title: 'Invitations' },
  { icon: HiOutlineCash, title: 'Billing' },
  { icon: HiOutlineViewGrid, title: 'Apps' },
]

export function Menu() {
  const [activeMenu, setActiveMenu] = useState('Billing')

  function handleClickMenu(event: MouseEvent, title: string) {
    event.preventDefault()
    setActiveMenu(title)
  }

  return (
    <nav className={styles.menu}>
      {menuItems.map(({ icon: Icon, title }) => (
        <a
          key={title}
          href="#"
          onClick={(event) => handleClickMenu(event, title)}
          className={cx({
            [styles.active]: title === activeMenu,
          })}
        >
          <Icon size={32} />
          {title}
        </a>
      ))}
    </nav>
  )
}
