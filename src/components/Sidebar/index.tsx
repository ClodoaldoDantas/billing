import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { useDrawer } from '../../contexts/DrawerContext'
import { useMediaQuery } from '../../hooks/useMediaQuery'

import { Menu } from '../Menu'
import { Profile } from '../Profile'
import { SignOut } from '../SignOut'

import styles from './styles.module.scss'

function SidebarNav() {
  return (
    <>
      <Profile />
      <Menu />
      <SignOut />
    </>
  )
}

export function Sidebar() {
  const { isOpen, toggleDrawer } = useDrawer()
  const isMediumDevice = useMediaQuery('(max-width: 991px)')

  return isMediumDevice ? (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className={styles.drawer}
    >
      <SidebarNav />
    </Drawer>
  ) : (
    <div className={styles.sidebar}>
      <SidebarNav />
    </div>
  )
}
