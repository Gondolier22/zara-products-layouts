import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useEditorStore } from '@/store/editor';
import type { ProductFile as ProductFileModel } from '@/models/product-file';
import { ProductFile } from './components/product-file/product-file';
import { ZoomControls } from './components/zoom-controls/zoom-controls';
import { FileManagementForm } from './components/file-management-form/file-management-form';
import { ProductCard } from '@/components/product-card/product-card';

const ProductsLayout = () => {
  const { t } = useTranslation();
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 p-3 sm:p-6 space-y-4 sm:space-y-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-800 text-center mb-6 sm:mb-10 tracking-tight px-4">
        {t('products.layout.title')}
      </h1>
      <DndProvider backend={HTML5Backend}>
        <section className="bg-gradient-to-br from-emerald-50 to-green-50 p-4 sm:p-6 rounded-xl shadow-lg border border-emerald-100">
          <h2 className="text-xl sm:text-2xl font-semibold text-emerald-800 mb-4 sm:mb-6 text-center">
            📦 {t('products.layout.selectableProducts')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
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
        <div className="text-center space-y-3 sm:space-y-4 px-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-indigo-800">
            ✏️ {t('products.layout.editor')}
          </h2>
          <FileManagementForm
            btnSubmitText={t('products.layout.buttons.addFile')}
            onSubmit={addFileHandler}
          />
        </div>
        {files.length > 0 && (
          <section className=" w-full bg-white from-indigo-50 to-blue-50 p-4 sm:p-6 rounded-xl shadow-lg border border-indigo-100">
            <TransformWrapper disabled maxScale={2} minScale={0.2}>
              <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-indigo-800 order-1 sm:order-none">
                  🔍 {t('products.layout.preview')}
                </h3>
                <div className="order-2 sm:order-none">
                  <ZoomControls />
                </div>
              </div>
              <TransformComponent>
                <div className="w-full bg-white p-3 sm:p-6  space-y-4 sm:space-y-8 min-h-48 sm:min-h-96">
                  {files.map((file) => (
                    <ProductFile key={`zoom-file-${file.id}`} {...file} />
                  ))}
                </div>
              </TransformComponent>
            </TransformWrapper>
          </section>
        )}
      </DndProvider>
    </div>
  );
};

export default ProductsLayout;
