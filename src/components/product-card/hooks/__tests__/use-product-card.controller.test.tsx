import { renderHook } from '@testing-library/react-hooks';
import { describe, it, expect, vi } from 'vitest';
import { DndProvider } from 'react-dnd';
import { TestBackend } from 'react-dnd-test-backend';
import { useProductCardController } from '../use-product-card.controller';
import { IProduct } from '../../../../models';
import { useEditorStore } from '../../../../pages/store/editor.store';

vi.mock('../../../../pages/store/editor.store');

const mockedUseEditorStore = useEditorStore as jest.MockedFunction<
  typeof useEditorStore
>;

describe('useProductCardController', () => {
  const mockProduct: IProduct = {
    id: '1',
    name: 'Test Product',
    image: 'test-image.jpg',
    price: 100,
  };

  it('should initialize with correct values', () => {
    const swapProducts = vi.fn();
    mockedUseEditorStore.mockReturnValue({ swapProducts });
    const { result } = renderHook(() => useProductCardController(mockProduct), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <DndProvider backend={TestBackend}>{children}</DndProvider>
      ),
    });

    expect(result.current.ref).toBeDefined();
    expect(result.current.opacity).toBe(1);
  });
});
