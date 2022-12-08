import styles from './styles.module.scss'

export function Plan() {
  return (
    <aside className={styles.planContainer}>
      <span>Your Plan</span>
      <h2>Pro Annual</h2>
      <p>Renews on Nov. 2021</p>

      <button type="button">Cancel subscription</button>
    </aside>
  )
}
