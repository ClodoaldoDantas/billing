import styles from './styles.module.scss'
import profileImg from '../../assets/profile.png'

export function Profile() {
  return (
    <div className={styles.profile}>
      <img src={profileImg} alt="Ildiko Gaspar" />

      <div className={styles.profileContent}>
        <strong>Ildiko Gaspar</strong>
        <span>@igaspar</span>
      </div>
    </div>
  )
}
