import { createRoot } from 'react-dom/client';
import { AppRouter } from './routes';
import { AppProvider } from './providers/app.provider';
import './styles/styles.css';

import './libs/i18n';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <AppRouter />
  </AppProvider>,
);
