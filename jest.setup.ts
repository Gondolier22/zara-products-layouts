import { vi } from 'vitest';
import '@testing-library/jest-dom';
// Polyfill for TextEncoder and TextDecoder
import { TextEncoder } from 'util';
import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;
import { cleanup } from '@testing-library/react';

global.TextEncoder = TextEncoder;

beforeEach(() => {
  vi.clearAllMocks();
});

afterAll(() => {
  cleanup();
});
