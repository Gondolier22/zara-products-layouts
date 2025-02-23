import { HTML5Backend } from 'react-dnd-html5-backend';
import ProductCard from '../../components/product-card/product-card.component';
import { DndProvider } from 'react-dnd';
import ProductFile from './components/product-file/product-file.component';
import { useEditorStore } from '../store/editor.store';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import ZoomControls from './components/zoom-controls/zoom-controls.component';
import FileManagementForm from './components/file-management-form/file-management-form.component';

const EditorPage = () => {
  const { selectableProducts, files, addFile } = useEditorStore();
  return (
    <div className="-c-editor-page">
      <h1>Products files management</h1>
      <DndProvider backend={HTML5Backend}>
        <section className="-c-selectable-products">
          <h2 className="-c-selectable-products__title">Selectable products</h2>
          <div className="-c-selectable-products__container">
            {selectableProducts.map((product) => (
              <ProductCard key={product.name} data={product} />
            ))}
          </div>
        </section>
        <h2>Editor</h2>
        <FileManagementForm btnSubmitText="Add file" onSubmit={addFile} />
        {files.length > 0 && (
          <>
            <section className="-c-zoom">
              <TransformWrapper disabled maxScale={2} minScale={0.2}>
                <ZoomControls />
                <TransformComponent>
                  <div className="-c-zoom__content">
                    {files.map((file) => (
                      <ProductFile key={`zoom-file-${file.id}`} {...file} />
                    ))}
                  </div>
                </TransformComponent>
              </TransformWrapper>
            </section>
            <FileManagementForm btnSubmitText="Add file" onSubmit={addFile} />
          </>
        )}
      </DndProvider>
    </div>
  );
};

export default EditorPage;
