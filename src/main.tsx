import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ReactFlowProvider } from '@xyflow/react';
import App from './components/Layout';
import { AppThemeProvider } from './context/ThemeContext/provider';
import './index.css';

createRoot(document.getElementById('root')!).render(
   <StrictMode>
      <AppThemeProvider>
         <ReactFlowProvider>
            <App />
         </ReactFlowProvider>
      </AppThemeProvider>
   </StrictMode>,
);
