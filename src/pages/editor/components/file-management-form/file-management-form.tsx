import { ProductFile } from '@/models/product-file';
import { useEditorStore } from '@/store/editor';

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
  const { selectableProducts } = useEditorStore();
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const aligment = formData.get('aligment') as ProductFile['aligment'];
    onSubmit(aligment);
  };
  return (
    <form
      className="c-file-management-form"
      onSubmit={onSubmitHandler}
      role="form"
    >
      <label className="c-file-management-form__label" htmlFor="aligment">
        Aligment:
      </label>
      <select
        className="c-file-management-form__select"
        name="aligment"
        id="aligment"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
      <button
        disabled={
          mode === 'create' && selectableProducts.every((pro) => !pro.isChecked)
        }
        className="c-file-management-form__button"
        type="submit"
      >
        {btnSubmitText}
      </button>
    </form>
  );
};
