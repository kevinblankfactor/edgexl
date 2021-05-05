import { render, screen, cleanup } from '@testing-library/react';
import By_me from '../by-me';

test('should render Create component', () => {
    render(
            <By_me />
    );
    const createElement = screen.getByTestId('create');
    expect(createElement).toBeInTheDocument();
    expect(createElement).toHaveTextContent('Create');
})