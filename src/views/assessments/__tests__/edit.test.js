import { render, screen, cleanup } from '@testing-library/react';
import Edit from '../edit';

test('should render By_district component', () => {
    render(
            <Edit />
    );
    const editElement = screen.getByTestId('edit');
    expect(editElement).toBeInTheDocument();
    expect(editElement).toHaveTextContent('Edit');
})