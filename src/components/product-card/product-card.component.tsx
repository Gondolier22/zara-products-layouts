import { FC } from 'react';
import { IProduct } from '../../models';
import { useProductCardController } from './hooks/use-product-card.controller';

export interface IProductCardProps {
  data: IProduct;
  onDelete?: (id: string) => void;
}

const ProductCard: FC<IProductCardProps> = ({ data, onDelete }) => {
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
