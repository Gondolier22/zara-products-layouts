import { Route, Routes } from 'react-router-dom';
import { EPATHS } from './types';
import { lazy } from 'react';

const MainLayout = lazy(() => import('./layouts/main-layout/main-layout'));
const EditorPage = lazy(() => import('./pages/editor/editor.page'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route Component={MainLayout}>
        <Route path={EPATHS.EDITOR_PAGE} element={<EditorPage />} />
      </Route>
    </Routes>
  );
};
