import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useCallback } from 'react';

import { useEditorStore } from '@/store/editor';
import { ProductFile as ProductFileModel } from '@/models/product-file';
import { ProductFile } from './components/product-file/product-file';
import { ZoomControls } from './components/zoom-controls/zoom-controls';
import { FileManagementForm } from './components/file-management-form/file-management-form';
import { ProductCard } from '@/components/product-card/product-card';

const EditorPage = () => {
  const {
    selectableProducts,
    files,
    addFile,
    onCheckProduct,
    updateSelectableProducts,
  } = useEditorStore();

  const addFileHandler = useCallback(
    (aligment: ProductFileModel['aligment']) => {
      addFile(
        aligment,
        selectableProducts.filter((pro) => pro.isChecked),
      );
      updateSelectableProducts(
        selectableProducts.filter((pro) => pro.isChecked).map((pro) => pro.id),
      );
    },
    [selectableProducts, addFile, updateSelectableProducts],
  );

  return (
    <div className="c-editor-page">
      <h1>Products files management</h1>
      <DndProvider backend={HTML5Backend}>
        <section className="c-selectable-products">
          <h2 className="c-selectable-products__title">Selectable products</h2>
          <div className="c-selectable-products__container">
            {selectableProducts.map((product) => (
              <ProductCard
                key={product.name}
                data={product}
                isCheckable={true}
                isChecked={product.isChecked}
                onCheck={onCheckProduct}
              />
            ))}
          </div>
        </section>
        <h2>Editor</h2>
        <FileManagementForm
          btnSubmitText="Add file"
          onSubmit={addFileHandler}
        />
        {files.length > 0 && (
          <>
            <section className="c-zoom">
              <TransformWrapper disabled maxScale={2} minScale={0.2}>
                <ZoomControls />
                <TransformComponent>
                  <div className="c-zoom__content">
                    {files.map((file) => (
                      <ProductFile key={`zoom-file-${file.id}`} {...file} />
                    ))}
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </section>
          </>
        )}
      </DndProvider>
    </div>
  );
};

export default EditorPage;
