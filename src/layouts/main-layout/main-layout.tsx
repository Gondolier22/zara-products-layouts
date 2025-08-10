import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
