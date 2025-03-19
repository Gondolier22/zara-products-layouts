import { useDrag, useDrop } from 'react-dnd';
import { DraggableItems } from '../../../types/draggable-items';
import { useRef } from 'react';
import { Product } from '../../../models/product-card';
import { useEditorStore } from '../../../pages/store/editor';

export const useProductCardController = (data: Product) => {
  const { swapProducts } = useEditorStore();
  const ref = useRef<HTMLElement>(null);
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: DraggableItems.PRODUCT_CARD,
      item: { data, type: DraggableItems.PRODUCT_CARD },
      canDrag: () => !!data,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [data],
  );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dropRef] = useDrop(
    () => ({
      accept: DraggableItems.PRODUCT_CARD,
      drop: (item: { data: Product; type: DraggableItems }) => {
        console.log('Dropped a product card:', data.id, item);
        swapProducts(data.id, item.data.id);
      },
    }),
    [data],
  );

  dragRef(ref);
  dropRef(ref);

  return {
    ref,
    opacity,
  };
};
