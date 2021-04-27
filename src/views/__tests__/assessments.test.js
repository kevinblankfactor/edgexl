import { render, screen, cleanup } from '@testing-library/react';
import Assessments from '../assessments';
import {BrowserRouter} from 'react-router-dom';

test('should render Assignments component', () => {
    render(
        <BrowserRouter>
            <Assessments />
        </BrowserRouter>
    );
    const assessmentsElement = screen.getByTestId('assessments');
    expect(assessmentsElement).toBeInTheDocument();
    expect(assessmentsElement).toHaveTextContent('Assessments');
    expect(assessmentsElement).toHaveTextContent('by me');
    expect(assessmentsElement).toHaveTextContent('by math nation');
    expect(assessmentsElement).toHaveTextContent('by district');
    expect(assessmentsElement).toHaveTextContent('by others');
    expect(assessmentsElement).toHaveTextContent('create');
    expect(assessmentsElement).toHaveTextContent('edit');
})