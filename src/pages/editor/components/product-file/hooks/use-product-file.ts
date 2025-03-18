import { useDrag, useDrop } from 'react-dnd';
import { DraggableItems } from '../../../../../types/draggable-items';
import { useEffect, useRef, useState } from 'react';
import { useEditorStore } from '../../../../store/editor';
import { ProductFile } from '../../../../../models/product-file';
import { Product } from '../../../../../models/product-card';

export const useProductFileController = (data: ProductFile) => {
  const [isChangingAligmentState, setIsChangingAligmentState] = useState(false);
  const {
    addProduct,
    swapFiles,
    updateSelectableProducts,
    updateFileAligment,
    deleteProduct,
  } = useEditorStore();
  const containerDropRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dropRef] = useDrop(
    () => ({
      accept: [DraggableItems.PRODUCT_CARD, DraggableItems.PRODUCT_FILE],
      drop: (item: { type: DraggableItems; data: Product | ProductFile }) => {
        if (item.type === DraggableItems.PRODUCT_CARD) {
          if (data.products.length >= 3) return;
          console.log('Dropped a product card:', item.data);
          addProduct(data.id, item.data as Product);
          updateSelectableProducts(item.data.id);
        } else if (item.type === DraggableItems.PRODUCT_FILE) {
          console.log('Dropped a product file:', item.data);
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
  };
};
