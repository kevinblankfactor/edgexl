import { render, screen, cleanup } from '@testing-library/react';
import By_others from '../by-others';

test('should render By_district component', () => {
    render(
            <By_others />
    );
    const by_districtElement = screen.getByTestId('by_district');
    expect(by_districtElement).toBeInTheDocument();
    expect(by_districtElement).toHaveTextContent('By district');
})