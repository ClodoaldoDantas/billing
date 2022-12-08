import { PageHeader } from '../../../components/PageHeader'
import { Button } from '../../../components/Button'
import visaImg from '../../../assets/visa.png'
import styles from './styles.module.scss'

export function PaymentMethod() {
  return (
    <div className={styles.paymentMethodContainer}>
      <PageHeader
        title="Payment Method"
        content="Manage billing information and view receips"
      />

      <div className={styles.paymentMethod}>
        <div className={styles.creditCard}>
          <figure>
            <img src={visaImg} alt="Logotipo Visa" />
          </figure>

          <span>Visa ending in 2255</span>
        </div>

        <Button>Remove</Button>
      </div>
    </div>
  )
}
