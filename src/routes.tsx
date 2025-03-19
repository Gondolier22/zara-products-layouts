import { Route, Routes } from 'react-router-dom';
import { PATHS } from './types/paths';
import { lazy } from 'react';

const MainLayout = lazy(() => import('./layouts/main-layout/main-layout'));
const EditorPage = lazy(() => import('./pages/editor/editor'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route Component={MainLayout}>
        <Route path={PATHS.EDITOR_PAGE} element={<EditorPage />} />
      </Route>
    </Routes>
  );
};
