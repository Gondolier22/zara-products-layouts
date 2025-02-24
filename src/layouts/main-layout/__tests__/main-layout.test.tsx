import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../main-layout';

describe('MainLayout', () => {
  it('renders the header with logo and navigation link', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(screen.getByAltText('ZARA logo')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /editor/i })).toBeInTheDocument();
  });

  it('renders the Outlet component', () => {
    render(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
