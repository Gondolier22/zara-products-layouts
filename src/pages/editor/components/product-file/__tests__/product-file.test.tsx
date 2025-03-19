import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect } from 'vitest';
import { ProductFile } from '../product-file';
import { ProductFile as ProductFileModel } from '@/models/product-file';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const deleteFileMock = vi.fn();
const setIsChangingAligmentMock = vi.fn();

vi.mock('../hooks/use-product-file', () => ({
  useProductFileController: vi.fn(() => ({
    containerDropRef: vi.fn(),
    opacity: 1,
    isChangingAligment: false,
    setIsChangingAligment: setIsChangingAligmentMock,
    onSubmit: vi.fn(),
    deleteProduct: vi.fn(),
    deleteFile: deleteFileMock,
  })),
}));

describe('ProductFile Component', () => {
  const mockProps: ProductFileModel = {
    id: '1',
    aligment: 'left',
    products: [
      { id: 'p1', name: 'Product 1', price: 10.99, image: 'product1.jpg' },
      { id: 'p2', name: 'Product 2', price: 15.49, image: 'product2.jpg' },
    ],
  };

  it('renders the component with products', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductFile {...mockProps} />
      </DndProvider>,
    );

    expect(screen.getByText('Aligment: left')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
  });

  it('calls deleteFile when delete button is clicked', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductFile {...mockProps} />
      </DndProvider>,
    );
    fireEvent.click(screen.getAllByText('X')[0]);

    expect(deleteFileMock).toHaveBeenCalled();
  });

  it('toggles aligment form when change aligment button is clicked', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductFile {...mockProps} />
      </DndProvider>,
    );
    fireEvent.click(screen.getByText('Change aligment'));

    expect(setIsChangingAligmentMock).toHaveBeenCalled();
  });
});
