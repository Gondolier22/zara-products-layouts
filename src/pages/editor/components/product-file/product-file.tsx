import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { useProductFileController } from './hooks/use-product-file';
import type { ProductFile as ProductFileModel } from '@/models/product-file';
import { FileManagementForm } from '../file-management-form/file-management-form';
import { ProductCard } from '@/components/product-card/product-card';

export const ProductFile: FC<ProductFileModel> = ({
  id,
  aligment,
  products,
}) => {
  const { t } = useTranslation();
  const {
    containerDropRef,
    opacity,
    isChangingAligment,
    setIsChangingAligment,
    onSubmit,
    deleteProduct,
    deleteFile,
  } = useProductFileController({
    id,
    aligment,
    products,
  });

  return (
    <div
      ref={containerDropRef}
      className="w-full relative bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:p-6 rounded-xl shadow-lg border border-indigo-100 space-y-4 sm:space-y-6"
      style={{ opacity }}
    >
      <button
        className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-red-300 to-pink-300 hover:from-red-400 hover:to-pink-400 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-200 shadow-md z-10"
        onClick={deleteFile}
        aria-label={t('products.layout.buttons.delete')}
      >
        ×
      </button>
      {isChangingAligment ? (
        <div className="pt-6 sm:pt-2">
          <FileManagementForm
            btnSubmitText={t('products.layout.buttons.save')}
            onSubmit={onSubmit}
            mode="edit"
          />
        </div>
      ) : (
        <div className="bg-white p-3 sm:p-4 rounded-xl border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-3 sm:gap-0">
          <p className="text-indigo-800 font-semibold text-sm sm:text-base">
            {t('products.layout.alignment')}:{' '}
            <span className="text-blue-600 font-bold capitalize">
              {t(`products.layout.alignmentOptions.${aligment}`)}
            </span>
          </p>
          <button
            onClick={setIsChangingAligment}
            className="px-3 sm:px-4 py-2 bg-gradient-to-r from-indigo-300 to-blue-300 hover:from-indigo-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base w-full sm:w-auto"
          >
            {t('products.layout.buttons.changeAlignment')}
          </button>
        </div>
      )}
      <div
        className={classNames('flex items-center gap-6', {
          'justify-start': aligment === 'left',
          'justify-center': aligment === 'center',
          'justify-end': aligment === 'right',
        })}
      >
        {products?.map((product) => (
          <ProductCard
            key={product?.id}
            data={product}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </div>
  );
};
