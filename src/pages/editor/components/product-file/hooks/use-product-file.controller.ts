import { useDrag, useDrop } from 'react-dnd';
import { EDraggableItems } from '../../../../../types';
import { useEffect, useRef, useState } from 'react';
import { useEditorStore } from '../../../../store/editor.store';
import { IProduct, IProductFile } from '../../../../../models';

export const useProductFileController = (data: IProductFile) => {
  const [isChangingAligmentState, setIsChangingAligmentState] = useState(false);
  const {
    addProduct,
    swapFiles,
    updateSelectableProducts,
    updateFileAligment,
  } = useEditorStore();
  const containerDropRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, dropRef] = useDrop(
    () => ({
      accept: [EDraggableItems.PRODUCT_CARD, EDraggableItems.PRODUCT_FILE],
      drop: (item: {
        type: EDraggableItems;
        data: IProduct | IProductFile;
      }) => {
        if (item.type === EDraggableItems.PRODUCT_CARD) {
          if (data.products.length >= 3) return;
          console.log('Dropped a product card:', item.data);
          addProduct(data.id, item.data);
          updateSelectableProducts(item.data.id);
        } else if (item.type === EDraggableItems.PRODUCT_FILE) {
          console.log('Dropped a product file:', item.data);
          swapFiles(data.id, item.data.id);
        }
      },
    }),
    [data, addProduct, swapFiles, updateSelectableProducts],
  );

  const [{ opacity }, dragRef] = useDrag(() => ({
    type: EDraggableItems.PRODUCT_FILE,
    item: { type: EDraggableItems.PRODUCT_FILE, data },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  useEffect(() => {
    dropRef(containerDropRef);
    dragRef(containerDropRef);
  }, [dropRef, dragRef]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const aligment = formData.get('aligment') as IProductFile['aligment'];
    console.log('Submitted aligment:', aligment);
    updateFileAligment(data.id, aligment);
    setIsChangingAligmentState(false);
  };

  return {
    containerDropRef,
    opacity,
    isChangingAligment: isChangingAligmentState,
    setIsChangingAligment: () => setIsChangingAligmentState((prev) => !prev),
    onSubmit,
  };
};
