import styles from './styles.module.css';



export function Footer() {
  return (
  <footer className={styles.footer}>
    <a href="">Entenda a técnica Pomodoro</a>
    <a href="">Cronômetro Pomodoro &copy; {new Date().getFullYear()} - Feito por Gesley Rosa</a>
  </footer>
  )
}
