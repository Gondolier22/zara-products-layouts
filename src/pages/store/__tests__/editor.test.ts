import { describe, it, expect, beforeEach } from 'vitest';
import { useEditorStore } from '../editor';
import { Product } from '../../../models/product-card';

describe('useEditorStore', () => {
  beforeEach(() => {
    useEditorStore.setState({
      files: [],
      selectableProducts: [],
    });
  });

  it('should add a file', () => {
    useEditorStore.getState().addFile('center');
    const files = useEditorStore.getState().files;
    expect(files).toHaveLength(1);
    expect(files[0].aligment).toBe('center');
  });

  it('should add a product to a file', () => {
    const product: Product = {
      id: '1',
      name: 'Product 1',
      image: 'image1.jpg',
      price: 10,
    };
    useEditorStore.getState().addFile('center');
    const fileId = useEditorStore.getState().files[0].id;
    useEditorStore.getState().addProduct(fileId, product);
    const files = useEditorStore.getState().files;
    expect(files[0].products).toHaveLength(1);
    expect(files[0].products[0]).toEqual(product);
  });

  it('should swap files', () => {
    useEditorStore.getState().addFile('center');
    useEditorStore.getState().addFile('left');
    const [file1, file2] = useEditorStore.getState().files;
    useEditorStore.getState().swapFiles(file1.id, file2.id);
    const files = useEditorStore.getState().files;
    expect(files[0].id).toBe(file2.id);
    expect(files[1].id).toBe(file1.id);
  });

  it('should swap products between files', () => {
    const product1: Product = {
      id: '1',
      name: 'Product 1',
      image: 'image1.jpg',
      price: 10,
    };
    const product2: Product = {
      id: '2',
      name: 'Product 2',
      image: 'image2.jpg',
      price: 20,
    };
    useEditorStore.getState().addFile('center');
    useEditorStore.getState().addFile('left');
    const [file1, file2] = useEditorStore.getState().files;
    useEditorStore.getState().addProduct(file1.id, product1);
    useEditorStore.getState().addProduct(file2.id, product2);
    useEditorStore.getState().swapProducts(product1.id, product2.id);
    const files = useEditorStore.getState().files;
    expect(files[0].products[0].id).toBe(product2.id);
    expect(files[1].products[0].id).toBe(product1.id);
  });

  it('should update selectable products', () => {
    const product: Product = {
      id: '1',
      name: 'Product 1',
      image: 'image1.jpg',
      price: 10,
    };
    useEditorStore.setState({ selectableProducts: [product] });
    useEditorStore.getState().updateSelectableProducts(product.id);
    const selectableProducts = useEditorStore.getState().selectableProducts;
    expect(selectableProducts).toHaveLength(3);
    expect(selectableProducts.some((p) => p.id === product.id)).toBe(false);
  });

  it('should update file alignment', () => {
    useEditorStore.getState().addFile('center');
    const fileId = useEditorStore.getState().files[0].id;
    useEditorStore.getState().updateFileAligment(fileId, 'left');
    const files = useEditorStore.getState().files;
    expect(files[0].aligment).toBe('left');
  });

  it('should delete a product from a file', () => {
    const product: Product = {
      id: '1',
      name: 'Product 1',
      image: 'image1.jpg',
      price: 10,
    };
    useEditorStore.getState().addFile('center');
    const fileId = useEditorStore.getState().files[0].id;
    useEditorStore.getState().addProduct(fileId, product);
    useEditorStore.getState().deleteProduct(product.id);
    const files = useEditorStore.getState().files;
    expect(files[0].products).toHaveLength(0);
  });
});
