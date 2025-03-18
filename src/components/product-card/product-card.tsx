import { FC } from 'react';
import { Product } from '../../models/product-card';
import { useProductCardController } from './hooks/use-product-card';

export interface ProductCardProps {
  data: Product;
  onDelete?: (id: string) => void;
}

const ProductCard: FC<ProductCardProps> = ({ data, onDelete }) => {
  const { ref, opacity } = useProductCardController(data);

  return (
    <article ref={ref} className="-c-product-card" style={{ opacity }}>
      {data && (
        <>
          {onDelete && (
            <button
              className="-c-product-card__delete"
              onClick={() => onDelete(data.id)}
            >
              X
            </button>
          )}
          <img src={data.image} alt={data.name} />
          <h2 title={data.name} className="-c-product-card__title">
            {data?.name}
          </h2>
          <p>{data?.price} €</p>
        </>
      )}
    </article>
  );
};

export default ProductCard;
