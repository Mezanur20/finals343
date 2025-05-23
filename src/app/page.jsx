import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Final Exam 343</h1>
        <h2 className={styles.subtitle}>Qureshi, Anique</h2>
        <h3 className={styles.semester}>Spring 2025</h3>   
      </div>
    </div>
  )
}