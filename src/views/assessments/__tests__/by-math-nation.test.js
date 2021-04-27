import { render, screen, cleanup } from '@testing-library/react';
import By_math_nation from '../by-math-nation';

test('should render By_math_nation component', () => {
    render(
            <By_math_nation />
    );
    const by_math_nationElement = screen.getByTestId('by_math_nation');
    expect(by_math_nationElement).toBeInTheDocument();
    expect(by_math_nationElement).toHaveTextContent('By math nation');
})