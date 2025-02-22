import { FC } from 'react';
import { IProduct } from '../../models';
import { useProductCardController } from './hooks/use-product-card.controller';

export interface IProductCardProps {
  data: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const { ref, opacity } = useProductCardController(data);

  return (
    <article ref={ref} className="-c-product-card" style={{ opacity }}>
      {data && (
        <>
          <img src={data?.image} alt={data?.name} />
          <h2>{data?.name}</h2>
          <p>{data?.price}</p>
        </>
      )}
      {!data && <p>Empty</p>}
    </article>
  );
};

export default ProductCard;
