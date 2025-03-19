import { Product } from '@/models/product-card';
import { FC } from 'react';
import { useProductCardController } from './hooks/use-product-card';

export interface ProductCardProps {
  data: Product;
  onDelete?: (id: string) => void;
  isCheckable?: boolean;
  isChecked?: boolean;
  onCheck?: (id: string) => void;
}

export const ProductCard: FC<ProductCardProps> = ({
  data,
  onDelete,
  isCheckable,
  isChecked,
  onCheck,
}) => {
  const { ref, opacity } = useProductCardController(data);

  return (
    <article ref={ref} className="c-product-card" style={{ opacity }}>
      {data && (
        <>
          {onDelete && !isCheckable && (
            <button
              className="c-product-card__delete"
              onClick={() => onDelete(data.id)}
            >
              X
            </button>
          )}
          {isCheckable && (
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => onCheck?.(data.id)}
              className="c-product-card__checkbox"
            />
          )}
          <img src={data.image} alt={data.name} loading="lazy" />
          <h2 title={data.name} className="c-product-card__title">
            {data?.name}
          </h2>
          <p>{data?.price} €</p>
        </>
      )}
    </article>
  );
};
