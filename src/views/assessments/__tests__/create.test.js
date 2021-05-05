import { render, screen, cleanup } from '@testing-library/react';
import Create from '../create';

test('should render By_district component', () => {
    render(
        <Create />
    );
    const by_districtElement = screen.getByTestId('by_district');
    expect(by_districtElement).toBeInTheDocument();
    expect(by_districtElement).toHaveTextContent('By district');
})