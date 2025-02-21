import { createRoot } from 'react-dom/client';
import { AppRouter } from './routes';
import { AppProvider } from './providers';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <AppRouter />
  </AppProvider>,
);
