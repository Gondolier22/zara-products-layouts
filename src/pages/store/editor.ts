import { create } from 'zustand';
import { Product } from '../../models/product-card';
import { faker } from '@faker-js/faker';
import { generateFakeProduct } from '../editor/utils';
import { ProductFile } from '../../models/product-file';

export type EditorStore = {
  files: ProductFile[];
  selectableProducts: Product[];
  addProduct: (fileId: string, product: Product) => void;
  addFile: (aligment: ProductFile['aligment']) => void;
  swapFiles: (currentFileId: string, dropFileId: string) => void;
  swapProducts: (currentProductId: string, dropProductId: string) => void;
  updateSelectableProducts: (productId: Product['id']) => void;
  updateFileAligment: (
    fileId: string,
    aligment: ProductFile['aligment'],
  ) => void;
  deleteProduct: (productId: string) => void;
};

export const useEditorStore = create<EditorStore>((set) => ({
  files: [],
  selectableProducts: Array.from({ length: 3 }, () => generateFakeProduct()),
  addProduct: (fileId, product) => {
    set((state) => {
      const updatedFiles = state.files.map((file) => {
        if (file.id === fileId) {
          if (file.products.length >= 3) return file;
          if (file.products.some((p) => p.id === product.id)) return file;
          return {
            ...file,
            products: [...file.products, product],
          };
        }
        return {
          ...file,
          products: file.products.filter((p) => p.id !== product.id),
        };
      });
      return { files: updatedFiles };
    });
  },
  addFile: (aligment) =>
    set((state) => ({
      files: [
        ...state.files,
        { id: faker.string.uuid(), aligment, products: [] },
      ],
    })),
  swapFiles: (currentFileId, dropFileId) => {
    set((state) => {
      const files = [...state.files];
      const currentFileIndex = files.findIndex(
        (file) => file.id === currentFileId,
      );
      const dropFileIndex = files.findIndex((file) => file.id === dropFileId);
      if (currentFileIndex === -1 || dropFileIndex === -1) return state;

      [files[currentFileIndex], files[dropFileIndex]] = [
        files[dropFileIndex],
        files[currentFileIndex],
      ];
      return { files };
    });
  },
  swapProducts: (currentProductId, dropProductId) => {
    set((state) => {
      let currentFileIndex = -1;
      let dropFileIndex = -1;
      let currentProductIndex = -1;
      let dropProductIndex = -1;

      state.files.forEach((file, fileIndex) => {
        file.products.forEach((product, productIndex) => {
          if (product.id === currentProductId) {
            currentFileIndex = fileIndex;
            currentProductIndex = productIndex;
          }
          if (product.id === dropProductId) {
            dropFileIndex = fileIndex;
            dropProductIndex = productIndex;
          }
        });
      });

      if (
        currentFileIndex === -1 ||
        dropFileIndex === -1 ||
        currentProductIndex === -1 ||
        dropProductIndex === -1
      ) {
        return state;
      }

      const files = [...state.files];
      const currentFile = { ...files[currentFileIndex] };
      const dropFile = { ...files[dropFileIndex] };

      const currentProduct = currentFile.products[currentProductIndex];
      const dropProduct = dropFile.products[dropProductIndex];

      currentFile.products[currentProductIndex] = dropProduct;
      dropFile.products[dropProductIndex] = currentProduct;

      files[currentFileIndex] = currentFile;
      files[dropFileIndex] = dropFile;

      return { files };
    });
  },
  updateSelectableProducts: (productId) => {
    set((state) => {
      const selectableProducts = state.selectableProducts.filter(
        (product) => product.id !== productId,
      );
      if (selectableProducts.length >= 3) return { selectableProducts };
      const fakeProducts = Array.from(
        { length: 3 - selectableProducts.length },
        generateFakeProduct,
      );
      return { selectableProducts: [...selectableProducts, ...fakeProducts] };
    });
  },
  updateFileAligment: (fileId, aligment) => {
    set((state) => ({
      files: state.files.map((file) =>
        file.id === fileId ? { ...file, aligment } : file,
      ),
    }));
  },
  deleteProduct: (productId) =>
    set((state) => ({
      files: state.files.map((file) => ({
        ...file,
        products: file.products.filter((product) => product.id !== productId),
      })),
    })),
}));
