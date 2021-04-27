import { render, screen, cleanup } from '@testing-library/react';
import Assignments from '../assignments';

test('should render Assignments component', () => {
    render(
            <Assignments />
    );
    const assignmentsElement = screen.getByTestId('assignments');
    expect(assignmentsElement).toBeInTheDocument();
    expect(assignmentsElement).toHaveTextContent('Assignments');
})