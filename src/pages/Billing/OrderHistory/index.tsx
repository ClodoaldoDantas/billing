import { Button } from '../../../components/Button'
import { PageHeader } from '../../../components/PageHeader'
import styles from './styles.module.scss'

const data = [
  { id: '1', date: 'Oct. 21, 2021', type: 'Pro Annual' },
  { id: '2', date: 'Aug. 21, 2021', type: 'Pro Portfolio' },
  { id: '3', date: 'July. 21, 2021', type: 'Sponsored Post' },
  { id: '4', date: 'Jun. 21, 2021', type: 'Sponsored Post' },
]

export function OrderHistory() {
  return (
    <div className={styles.orderHistoryContainer}>
      <PageHeader
        title="Order History"
        content="Manage billing information and view receips"
      />

      <table>
        <thead>
          <tr>
            <th style={{ width: '45%' }}>Date</th>
            <th style={{ width: '45%' }}>Type</th>
            <th style={{ width: '10%' }}>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>
                <Button type="button">Download</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" className={styles.loadMore}>
        Load more
      </button>
    </div>
  )
}
