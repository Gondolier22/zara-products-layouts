import { FC } from 'react';
import { useProductFileController } from './hooks/use-product-file.controller';
import ProductCard from '../../../../components/product-card/product-card.component';
import { IProductFile } from '../../../../models';
import FileManagementForm from '../file-management-form/file-management-form.component';

const ProductFile: FC<IProductFile> = ({ id, aligment, products }) => {
  const {
    containerDropRef,
    opacity,
    isChangingAligment,
    setIsChangingAligment,
    onSubmit,
    deleteProduct,
  } = useProductFileController({
    id,
    aligment,
    products,
  });

  return (
    <div
      ref={containerDropRef}
      className={`-c-products-file`}
      style={{ opacity }}
    >
      {isChangingAligment ? (
        <FileManagementForm btnSubmitText="Save" onSubmit={onSubmit} />
      ) : (
        <div className="-c-products-file__title">
          <p>Aligment: {aligment}</p>
          <button onClick={setIsChangingAligment}>Change aligment</button>
        </div>
      )}
      <div
        className={`-c-products-file__products -c-products-file__products--${aligment}`}
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

export default ProductFile;
