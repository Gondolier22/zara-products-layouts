import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard, { IProductCardProps } from '../product-card.component';
import { vi } from 'vitest';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
const mockProduct: IProductCardProps['data'] = {
  id: '1',
  name: 'Test Product',
  image: 'test-image.jpg',
  price: 100,
};

describe('ProductCard Component', () => {
  test('renders product details correctly', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} />
      </DndProvider>,
    );

    expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} €`)).toBeInTheDocument();
  });
  test('renders delete button when onDelete is provided', () => {
    const mockOnDelete = vi.fn();
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} onDelete={mockOnDelete} />
      </DndProvider>,
    );

    const deleteButton = screen.getByRole('button', { name: /x/i });
    expect(deleteButton).toBeInTheDocument();
  });

  test('does not render delete button when onDelete is not provided', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} />
      </DndProvider>,
    );

    const deleteButton = screen.queryByRole('button', { name: /x/i });
    expect(deleteButton).not.toBeInTheDocument();
  });

  test('calls onDelete when delete button is clicked', () => {
    const mockOnDelete = vi.fn();
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} onDelete={mockOnDelete} />
      </DndProvider>,
    );

    const deleteButton = screen.getByRole('button', { name: /x/i });
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith(mockProduct.id);
  });
});
