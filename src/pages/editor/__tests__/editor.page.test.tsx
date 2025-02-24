import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import EditorPage from '../editor.page';
import { useEditorStore } from '../../store/editor.store';

vi.mock('../../store/editor.store');

const mockedUseEditorStore = useEditorStore as jest.MockedFunction<
  typeof useEditorStore
>;

describe('EditorPage', () => {
  it('renders the page title', () => {
    mockedUseEditorStore.mockReturnValue({
      selectableProducts: [],
      files: [],
      addFile: vi.fn(),
    });

    render(<EditorPage />);
    expect(screen.getByText('Products files management')).toBeInTheDocument();
  });

  it('renders selectable products', () => {
    mockedUseEditorStore.mockReturnValue({
      selectableProducts: [
        { id: '1', name: 'Product 1', image: 'image1.jpg', price: 10 },
        { id: '2', name: 'Product 2', image: 'image2.jpg', price: 20 },
      ],
      files: [],
      addFile: vi.fn(),
    });

    render(<EditorPage />);
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('renders the editor section', () => {
    mockedUseEditorStore.mockReturnValue({
      selectableProducts: [],
      files: [],
      addFile: vi.fn(),
    });

    render(<EditorPage />);
    expect(screen.getByText('Editor')).toBeInTheDocument();
  });

  it('renders files when available', () => {
    mockedUseEditorStore.mockReturnValue({
      selectableProducts: [],
      files: [
        {
          id: '1',
          name: 'File 1',
          aligment: 'center',
          products: [{ id: '1' }],
        },
      ],
      addFile: vi.fn(),
    });

    render(<EditorPage />);
    expect(screen.getByText('Aligment: center')).toBeInTheDocument();
  });

  it('renders the file management form', () => {
    mockedUseEditorStore.mockReturnValue({
      selectableProducts: [],
      files: [],
      addFile: vi.fn(),
    });

    render(<EditorPage />);
    expect(screen.getByText('Add file')).toBeInTheDocument();
  });
});
