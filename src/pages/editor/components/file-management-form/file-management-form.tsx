import { ProductFile } from '../../../../models/product-file';

type FileManagementFormProps = {
  btnSubmitText: string;
  onSubmit: (aligment: ProductFile['aligment']) => void;
};

export const FileManagementForm: React.FC<FileManagementFormProps> = ({
  btnSubmitText,
  onSubmit,
}) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const aligment = formData.get('aligment') as ProductFile['aligment'];
    onSubmit(aligment);
  };
  return (
    <form
      className="-c-file-management-form"
      onSubmit={onSubmitHandler}
      role="form"
    >
      <label className="-c-file-management-form__label" htmlFor="aligment">
        Aligment:
      </label>
      <select
        className="-c-file-management-form__select"
        name="aligment"
        id="aligment"
      >
        <option value="left">Left</option>
        <option value="center">Center</option>
        <option value="right">Right</option>
      </select>
      <button className="-c-file-management-form__button" type="submit">
        {btnSubmitText}
      </button>
    </form>
  );
};
