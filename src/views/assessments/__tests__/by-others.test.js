import { render, screen, cleanup } from '@testing-library/react';
import By_district from '../by-district';

test('should render By_district component', () => {
    render(
            <By_district />
    );
    const by_districtElement = screen.getByTestId('by_district');
    expect(by_districtElement).toBeInTheDocument();
    expect(by_districtElement).toHaveTextContent('By district');
})