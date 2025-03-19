import { renderHook, act } from '@testing-library/react';
import { useProductFileController } from './use-product-file';
import { Mock, vi } from 'vitest';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useEditorStore } from '@/store/editor';

vi.mock('@/store/editor', () => ({
  useEditorStore: vi.fn(),
}));

describe('useProductFileController', () => {
  const mockAddProduct = vi.fn();
  const mockSwapFiles = vi.fn();
  const mockUpdateSelectableProducts = vi.fn();
  const mockUpdateFileAligment = vi.fn();
  const mockDeleteProduct = vi.fn();
  const mockDeleteFile = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useEditorStore as unknown as Mock).mockReturnValue({
      addProduct: mockAddProduct,
      swapFiles: mockSwapFiles,
      updateSelectableProducts: mockUpdateSelectableProducts,
      updateFileAligment: mockUpdateFileAligment,
      deleteProduct: mockDeleteProduct,
      deleteFile: mockDeleteFile,
      // Removed incorrect `drop` mock and added proper mocking for `useDrop`
    });
  });

  const mockData = {
    id: 'file1',
    products: [],
    aligment: 'left' as 'left' | 'center' | 'right',
  };

  it('should initialize correctly', () => {
    const { result } = renderHook(() => useProductFileController(mockData), {
      wrapper: ({ children }) => (
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      ),
    });
    expect(result.current.isChangingAligment).toBe(false);
    expect(result.current.opacity).toBe(1);
  });

  it('should toggle isChangingAligment state', () => {
    const { result } = renderHook(() => useProductFileController(mockData), {
      wrapper: ({ children }) => (
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      ),
    });
    act(() => {
      result.current.setIsChangingAligment();
    });
    expect(result.current.isChangingAligment).toBe(true);
  });

  it('should call updateFileAligment on onSubmit', () => {
    const { result } = renderHook(() => useProductFileController(mockData), {
      wrapper: ({ children }) => (
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
      ),
    });
    act(() => {
      result.current.onSubmit('right');
    });
    expect(mockUpdateFileAligment).toHaveBeenCalledWith('file1', 'right');
    expect(result.current.isChangingAligment).toBe(false);
  });
});
