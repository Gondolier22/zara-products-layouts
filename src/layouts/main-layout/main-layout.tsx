import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { PATHS } from '../../types/paths';

const MainLayout: FC = () => {
  return (
    <>
      <header className="-c-header">
        <nav className="-c-header__nav">
          <img
            className="-c-header__logo"
            src="/images/logo.png"
            alt="ZARA logo"
          />
          <ul className="-c-header__list">
            <li className="-c-header__item">
              <Link to={PATHS.EDITOR_PAGE}>Editor</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default MainLayout;
