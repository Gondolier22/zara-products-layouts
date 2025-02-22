import { FC } from 'react';
import { useProductFileController } from './hooks/use-product-file.controller';
import ProductCard from '../../../../components/product-card/product-card.component';
import { IProductFile } from '../../../../models';

const ProductFile: FC<IProductFile> = ({ id, aligment, products }) => {
  const {
    containerDropRef,
    opacity,
    isChangingAligment,
    setIsChangingAligment,
    onSubmit,
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
        <form onSubmit={onSubmit}>
          <label htmlFor="aligment">Aligment:</label>
          <select name="aligment" id="aligment" defaultValue={aligment}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div className="-c-products-file__title">
          <p>Aligment: {aligment}</p>
          <button onClick={setIsChangingAligment}>Change aligment</button>
        </div>
      )}
      <div
        className={`-c-products-file__products -c-products-file__products--${aligment}`}
      >
        {products.map((product) => (
          <ProductCard key={product?.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductFile;
