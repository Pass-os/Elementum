import { useAppTheme } from '../../context/ThemeContext/context';

export default function HomePage() {
   const { theme, toggleTheme } = useAppTheme();

   return (
      <button onClick={toggleTheme}>
         Alternar para {theme === 'dark' ? 'Claro' : 'Escuro'}
      </button>
   );
}
