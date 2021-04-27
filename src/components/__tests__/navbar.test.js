import { render, screen, cleanup } from '@testing-library/react';
import Navbar from '../navbar';
import {BrowserRouter} from 'react-router-dom';

test('should render Navbar component', () => {
    render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
    expect(navbarElement).toHaveTextContent('Assignments');
    expect(navbarElement).toHaveTextContent('Assessments');
})