import styles from './style.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red'; // o ? informa que a propriedade é opcional
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  return (
    <>
    <button className={`${styles.button} ${styles[color]}`}  {...props}>
      {icon}
    </button>
    </>
    );
}