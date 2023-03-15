import clsx from 'clsx';
import { ThemeProvider, useTheme } from '../src/context/ThemeProvider';
import { ToggleThemeButton } from './components/ToggleThemeButton';
import { MemorySection } from './Components/Memory/MemorySection';

const AppWithTheme = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div
      id="app"
      className={clsx({
        dark: isDark,
      })}
    >
      {children}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppWithTheme>
      <div className="m-auto h-screen">
        <ToggleThemeButton />
        <MemorySection />
      </div>
    </AppWithTheme>
  </ThemeProvider>
);

export default App;
