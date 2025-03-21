import { FC } from 'react';

import { useProductFileController } from './hooks/use-product-file';
import { ProductCard } from '@/components/product-card/product-card';
import { ProductFile as ProductFileModel } from '@/models/product-file';
import { FileManagementForm } from '../file-management-form/file-management-form';

export const ProductFile: FC<ProductFileModel> = ({
  id,
  aligment,
  products,
}) => {
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
      className={`c-products-file`}
      style={{ opacity }}
    >
      <button className="c-product-file__delete" onClick={deleteFile}>
        X
      </button>
      {isChangingAligment ? (
        <FileManagementForm
          btnSubmitText="Save"
          onSubmit={onSubmit}
          mode="edit"
        />
      ) : (
        <div className="c-products-file__title">
          <p>Aligment: {aligment}</p>
          <button onClick={setIsChangingAligment}>Change aligment</button>
        </div>
      )}
      <div
        className={`c-products-file__products c-products-file__products--${aligment}`}
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
