import styles from './styles.module.scss'

interface PageHeaderProps {
  title: string
  content: string
}

export function PageHeader({ title, content }: PageHeaderProps) {
  return (
    <header className={styles.pageHeader}>
      <h3>{title}</h3>
      <p>{content}</p>
    </header>
  )
}
