import { useControls } from 'react-zoom-pan-pinch';
import { useTranslation } from 'react-i18next';

export const ZoomControls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-2 sm:p-3 rounded-xl shadow-md border border-indigo-100 flex items-center gap-1 sm:gap-2">
      <button
        onClick={() => zoomIn()}
        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center text-base sm:text-lg"
        aria-label={t('products.layout.zoom.zoomIn')}
        title={t('products.layout.zoom.zoomIn')}
      >
        +
      </button>
      <button
        onClick={() => zoomOut()}
        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-500 hover:to-blue-500 text-white font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center text-base sm:text-lg"
        aria-label={t('products.layout.zoom.zoomOut')}
        title={t('products.layout.zoom.zoomOut')}
      >
        −
      </button>
      <button
        onClick={() => resetTransform()}
        className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-slate-400 to-gray-400 hover:from-slate-500 hover:to-gray-500 text-white font-bold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center text-xs sm:text-sm"
        aria-label={t('products.layout.zoom.reset')}
        title={t('products.layout.zoom.reset')}
      >
        ⌂
      </button>
    </div>
  );
};
