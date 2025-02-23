import { useDrag, useDrop } from 'react-dnd';
import { EDraggableItems } from '../../../types';
import { useRef } from 'react';
import { IProduct } from '../../../models';
import { useEditorStore } from '../../../pages/store/editor.store';

export const useProductCardController = (data: IProduct) => {
  const { swapProducts } = useEditorStore();
  const ref = useRef<HTMLElement>(null);
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: EDraggableItems.PRODUCT_CARD,
      item: { data, type: EDraggableItems.PRODUCT_CARD },
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
      accept: EDraggableItems.PRODUCT_CARD,
      drop: (item: { data: IProduct; type: EDraggableItems }) => {
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
