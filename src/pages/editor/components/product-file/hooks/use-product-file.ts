import { Product } from '@/models/product-card';
import { ProductFile } from '@/models/product-file';
import { useEditorStore } from '@/store/editor';
import { DraggableItems } from '@/types/draggable-items';
import { useEffect, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

export const useProductFileController = (data: ProductFile) => {
  const [isChangingAligmentState, setIsChangingAligmentState] = useState(false);
  const {
    addProduct,
    swapFiles,
    updateSelectableProducts,
    updateFileAligment,
    deleteProduct,
    deleteFile,
  } = useEditorStore();
  const containerDropRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dropRef] = useDrop(
    () => ({
      accept: [DraggableItems.PRODUCT_CARD, DraggableItems.PRODUCT_FILE],
      drop: (item: { type: DraggableItems; data: Product | ProductFile }) => {
        if (item.type === DraggableItems.PRODUCT_CARD) {
          if (data.products.length >= 3) return;
          addProduct(data.id, item.data as Product);
          updateSelectableProducts([item.data.id]);
        } else if (item.type === DraggableItems.PRODUCT_FILE) {
          swapFiles(data.id, item.data.id);
        }
      },
    }),
    [data, addProduct, swapFiles, updateSelectableProducts],
  );

  const [{ opacity }, dragRef] = useDrag(() => ({
    type: DraggableItems.PRODUCT_FILE,
    item: { type: DraggableItems.PRODUCT_FILE, data },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  useEffect(() => {
    dropRef(containerDropRef);
    dragRef(containerDropRef);
  }, [dropRef, dragRef]);

  useEffect(() => {
    if (data.products.length === 0) {
      deleteFile(data.id);
    }
  }, [data.products, deleteFile, data.id]);

  const onSubmit = (aligment: ProductFile['aligment']) => {
    updateFileAligment(data.id, aligment);
    setIsChangingAligmentState(false);
  };

  return {
    containerDropRef,
    opacity,
    isChangingAligment: isChangingAligmentState,
    setIsChangingAligment: () => setIsChangingAligmentState((prev) => !prev),
    onSubmit,
    deleteProduct,
    deleteFile: () => deleteFile(data.id),
  };
};
