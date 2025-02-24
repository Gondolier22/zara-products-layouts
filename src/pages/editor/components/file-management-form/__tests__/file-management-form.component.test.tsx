import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FileManagementForm from '../file-management-form.component';

describe('FileManagementForm', () => {
  it('renders the form with the correct elements', () => {
    render(<FileManagementForm btnSubmitText="Add file" onSubmit={vi.fn()} />);

    expect(screen.getByLabelText(/aligment/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add file/i }),
    ).toBeInTheDocument();
  });

  it('calls onSubmit with the correct alignment value', () => {
    const mockOnSubmit = vi.fn();
    render(
      <FileManagementForm btnSubmitText="Add file" onSubmit={mockOnSubmit} />,
    );

    fireEvent.change(screen.getByLabelText(/aligment/i), {
      target: { value: 'center' },
    });
    fireEvent.submit(screen.getByRole('button', { name: /add file/i }));

    expect(mockOnSubmit).toHaveBeenCalledWith('center');
  });
});
