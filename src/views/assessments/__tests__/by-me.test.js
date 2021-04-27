import { render, screen, cleanup } from '@testing-library/react';
import Create from '../create';

test('should render Create component', () => {
    render(
            <Create />
    );
    const createElement = screen.getByTestId('create');
    expect(createElement).toBeInTheDocument();
    expect(createElement).toHaveTextContent('Create');
})