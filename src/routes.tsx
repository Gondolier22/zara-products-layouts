import { Route, Routes } from 'react-router-dom';
import { EPATHS } from './types';
import { lazy } from 'react';

const EditorPage = lazy(() => import('./pages/editor/editor.page'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={EPATHS.EDITOR_PAGE} element={<EditorPage />} />
    </Routes>
  );
};
