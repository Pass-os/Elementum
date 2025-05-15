import { Button } from '@/components/ui/button';
import { useAppTheme } from '../../context/ThemeContext/context';
export default function HomePage() {
   const { theme, toggleTheme } = useAppTheme();

   return (
      <div>
         <h1 className="text-4xl font-bold">FrontMap</h1>

         <Button onClick={toggleTheme}>
            Alternar para {theme === 'dark' ? 'Claro' : 'Escuro'}
         </Button>
      </div>
   );
}
