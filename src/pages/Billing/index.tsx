import { OrderHistory } from './OrderHistory'
import { PaymentMethod } from './PaymentMethod'
import { Plan } from './Plan'
import styles from './styles.module.scss'

export function Billing() {
  return (
    <div className={styles.billingGrid}>
      <section className={styles.billingSection}>
        <h1>Billing</h1>

        <OrderHistory />
        <PaymentMethod />
      </section>

      <Plan />
    </div>
  )
}
