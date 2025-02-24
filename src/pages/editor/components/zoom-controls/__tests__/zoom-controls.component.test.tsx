import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ZoomControls from '../zoom-controls.component';
import { useControls } from 'react-zoom-pan-pinch';

vi.mock('react-zoom-pan-pinch');

const mockedUseControls = useControls as jest.Mock;

describe('ZoomControls', () => {
  it('renders the zoom controls', () => {
    mockedUseControls.mockImplementation(() => ({
      zoomIn: vi.fn(),
      zoomOut: vi.fn(),
      resetTransform: vi.fn(),
    }));
    render(<ZoomControls />);

    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
    expect(screen.getByText('x')).toBeInTheDocument();
  });

  it('calls zoomIn when + button is clicked', () => {
    const mockZoomIn = vi.fn();
    mockedUseControls.mockImplementation(() => ({
      zoomIn: mockZoomIn,
      zoomOut: vi.fn(),
      resetTransform: vi.fn(),
    }));

    render(<ZoomControls />);
    fireEvent.click(screen.getByText('+'));

    expect(mockZoomIn).toHaveBeenCalled();
  });

  it('calls zoomOut when - button is clicked', () => {
    const mockZoomOut = vi.fn();
    mockedUseControls.mockReturnValue({
      zoomIn: vi.fn(),
      zoomOut: mockZoomOut,
      resetTransform: vi.fn(),
    });

    render(<ZoomControls />);
    fireEvent.click(screen.getByText('-'));

    expect(mockZoomOut).toHaveBeenCalled();
  });

  it('calls resetTransform when x button is clicked', () => {
    const mockResetTransform = vi.fn();
    mockedUseControls.mockReturnValue({
      zoomIn: vi.fn(),
      zoomOut: vi.fn(),
      resetTransform: mockResetTransform,
    });

    render(<ZoomControls />);
    fireEvent.click(screen.getByText('x'));

    expect(mockResetTransform).toHaveBeenCalled();
  });
});
