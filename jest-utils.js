import 'vitest';
import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver
import '@testing-library/jest-dom';