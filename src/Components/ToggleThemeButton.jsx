import styles from './ToggleThemeButton.module.css';
import { MdOutlineModeNight, MdOutlineWbSunny } from 'react-icons/md';
import clsx from 'clsx';
import { useTheme } from '../context/ThemeProvider';

export const ToggleThemeButton = () => {
  const { isDark, isLight, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-hidden rounded-full border-primary p-2">
      <MdOutlineWbSunny
        onClick={toggleTheme}
        className={clsx('relative h-6 w-6 cursor-pointer text-primary', {
          [styles.enter]: isLight,
          [styles.exit]: isDark,
        })}
      />
      <MdOutlineModeNight
        onClick={toggleTheme}
        className={clsx('absolute top-2 h-6 w-6 cursor-pointer text-primary', {
          [styles.enter]: isDark,
          [styles.exit]: isLight,
        })}
      />
    </div>
  );
};
