import { IProductFile } from '../../../../models';

type TFileManagementFormProps = {
  btnSubmitText: string;
  onSubmit: (aligment: IProductFile['aligment']) => void;
};

const FileManagementForm: React.FC<TFileManagementFormProps> = ({
  btnSubmitText,
  onSubmit,
}) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const aligment = formData.get('aligment') as IProductFile['aligment'];
    onSubmit(aligment);
  };
  return (
    <form className="-c-file-management-form" onSubmit={onSubmitHandler}>
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

export default FileManagementForm;
