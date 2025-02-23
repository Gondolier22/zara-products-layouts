import { FC, PropsWithChildren, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </>
  );
};
