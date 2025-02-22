import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = () => {
  return (
    <>
      <header>
        <nav>
          <img src="logo.png" alt="ZARA logo" />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
