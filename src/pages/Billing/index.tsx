import { HiOutlineMenu } from 'react-icons/hi'
import { useDrawer } from '../../contexts/DrawerContext'
import { OrderHistory } from './OrderHistory'
import { PaymentMethod } from './PaymentMethod'
import { Plan } from './Plan'
import styles from './styles.module.scss'

export function Billing() {
  const { toggleDrawer } = useDrawer()

  return (
    <div className={styles.grid}>
      <section className={styles.section}>
        <div className={styles.sectionIntro}>
          <button onClick={toggleDrawer} className={styles.toggle}>
            <HiOutlineMenu size={24} />
          </button>

          <h1>Billing</h1>
        </div>

        <OrderHistory />
        <PaymentMethod />
      </section>

      <Plan />
    </div>
  )
}
