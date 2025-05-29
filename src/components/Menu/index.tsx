import { HouseIcon, HistoryIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

//teste

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme') as AvailableThemes || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />
  }

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} 
         href='#' 
         aria-label='Ir para a Home' 
         title='Ir para a Home'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} 
         href='#' 
         aria-label='Ver histórico' 
         title='Ver histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} 
         href='#'
         aria-label='Configurações' 
         title='Configurações'>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink} 
         href='#'
         aria-label='Mudar tema' 
         title='Mudar tema'
         onClick={handleThemeChange}
        >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
