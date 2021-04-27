import { render, screen, cleanup } from '@testing-library/react';
import Router from '../router';
import {BrowserRouter} from 'react-router-dom';

test('should render Router component', () => {
    render(
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
    const routerElement = screen.getByTestId('router');
    expect(routerElement).toBeInTheDocument();
})