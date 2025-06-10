import styles from './style.module.css'

type GenericHtmlProps = {
    children: React.ReactNode;
}

export function GenericHtml({children}: GenericHtmlProps) {
    return <div className={styles.GenericHtml}>{children}</div>
}