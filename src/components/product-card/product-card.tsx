import type { Product } from '../../models/product-card';
import type { FC } from 'react';
import { useProductCardController } from './hooks/use-product-card';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <article
      ref={ref}
      className="relative bg-white rounded-xl shadow-lg hover:shadow-lg transition-all duration-300 overflow-hidden border border-indigo-100 h-64 sm:h-72 md:h-80 flex flex-col"
      style={{ opacity }}
    >
      {data && (
        <>
          {onDelete && !isCheckable && (
            <button
              className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-red-300 to-pink-300 hover:from-red-400 hover:to-pink-400 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-200 z-10 shadow-md"
              onClick={() => onDelete(data.id)}
              aria-label={t('products.layout.buttons.delete')}
            >
              ×
            </button>
          )}
          {isCheckable && (
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => onCheck?.(data.id)}
              className="absolute top-2 left-2 sm:top-3 sm:left-3 w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 bg-white border-2 border-indigo-200 rounded focus:ring-indigo-300 focus:ring-2 z-10"
            />
          )}
          <div className="flex-1 overflow-hidden">
            <img
              src={data.image}
              alt={data.name}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-3 sm:p-4 space-y-1 sm:space-y-2 bg-gradient-to-br from-indigo-50 to-blue-50">
            <h2
              title={data.name}
              className="text-sm sm:text-base md:text-lg font-semibold text-indigo-800 line-clamp-2 leading-tight"
            >
              {data?.name}
            </h2>
            <p className="text-lg sm:text-xl font-bold text-emerald-600">
              {data?.price} €
            </p>
          </div>
        </>
      )}
    </article>
  );
};
