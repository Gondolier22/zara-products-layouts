import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCardProps, ProductCard } from '../product-card';
import { vi } from 'vitest';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const mockProduct: ProductCardProps['data'] = {
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

  test('renders checkbox when isCheckable is true', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} isCheckable />
      </DndProvider>,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  test('does not render checkbox when isCheckable is false', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} />
      </DndProvider>,
    );

    const checkbox = screen.queryByRole('checkbox');
    expect(checkbox).not.toBeInTheDocument();
  });

  test('checkbox is checked when isChecked is true', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} isCheckable isChecked />
      </DndProvider>,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  test('checkbox is not checked when isChecked is false', () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} isCheckable isChecked={false} />
      </DndProvider>,
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  test('calls onCheck when checkbox is toggled', () => {
    const mockOnCheck = vi.fn();
    render(
      <DndProvider backend={HTML5Backend}>
        <ProductCard data={mockProduct} isCheckable onCheck={mockOnCheck} />
      </DndProvider>,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnCheck).toHaveBeenCalledWith(mockProduct.id);
  });
});
