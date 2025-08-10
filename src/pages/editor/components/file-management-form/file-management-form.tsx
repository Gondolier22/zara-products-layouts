import { ProductFile } from '@/models/product-file';
import { useEditorStore } from '@/store/editor';
import { useTranslation } from 'react-i18next';

type FileManagementFormProps = {
  btnSubmitText: string;
  mode?: 'edit' | 'create';
  onSubmit: (aligment: ProductFile['aligment']) => void;
};

export const FileManagementForm: React.FC<FileManagementFormProps> = ({
  mode = 'create',
  btnSubmitText,
  onSubmit,
}) => {
  const { t } = useTranslation();
  const { selectableProducts } = useEditorStore();
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const aligment = formData.get('aligment') as ProductFile['aligment'];
    onSubmit(aligment);
  };
  return (
    <form
      className="bg-gradient-to-br from-indigo-50 to-blue-50 p-3 sm:p-4 rounded-xl shadow-md border border-indigo-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-fit mx-auto"
      onSubmit={onSubmitHandler}
      role="form"
    >
      <label
        className="text-indigo-800 text-sm font-semibold text-center sm:text-left sm:whitespace-nowrap"
        htmlFor="aligment"
      >
        {t('products.layout.alignment')}:
      </label>
      <select
        className="px-3 py-2 bg-white border-2 border-indigo-200 rounded-lg focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-all duration-200 text-indigo-800 w-full sm:min-w-28 sm:w-auto shadow-sm text-sm sm:text-base"
        name="aligment"
        id="aligment"
      >
        <option value="left">
          {t('products.layout.alignmentOptions.left')}
        </option>
        <option value="center">
          {t('products.layout.alignmentOptions.center')}
        </option>
        <option value="right">
          {t('products.layout.alignmentOptions.right')}
        </option>
      </select>
      <button
        disabled={
          mode === 'create' && selectableProducts.every((pro) => !pro.isChecked)
        }
        className="px-4 sm:px-6 py-2 bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-500 hover:to-blue-500 disabled:from-gray-300 disabled:to-gray-400 disabled:text-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto whitespace-nowrap"
        type="submit"
      >
        {btnSubmitText}
      </button>
    </form>
  );
};
