import { HTML5Backend } from 'react-dnd-html5-backend';
import ProductCard from '../../components/product-card/product-card.component';
import { DndProvider } from 'react-dnd';
import ProductFile from './components/product-file/product-file.component';
import { useEditorStore } from '../store/editor.store';
import { IProductFile } from '../../models';

const EditorPage = () => {
  const { selectableProducts, files, addFile } = useEditorStore();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const aligment = formData.get('aligment') as IProductFile['aligment'];
    console.log('Submitted aligment:', aligment);
    addFile(aligment);
  };
  return (
    <div>
      <h1>Editor</h1>
      <DndProvider backend={HTML5Backend}>
        <section className="-c-selectable-products">
          <h2 className="-c-selectable-products__title">Selectable products</h2>
          <div className="-c-selectable-products__container">
            {selectableProducts.map((product) => (
              <ProductCard key={product.name} data={product} />
            ))}
          </div>
        </section>
        <section className="-c-zoom">
          <div className="-c-zoom__content">
            {files.map((file) => (
              <ProductFile key={`zoom-file-${file.id}`} {...file} />
            ))}
          </div>
        </section>
        <form onSubmit={onSubmit}>
          <label htmlFor="aligment">Aligment:</label>
          <select name="aligment" id="aligment">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
          <button type="submit">Add file</button>
        </form>
      </DndProvider>
    </div>
  );
};

export default EditorPage;
