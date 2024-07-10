import { describe, it } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import App from '@app/app';


describe('App', () => {
    it('renders the App component', async () => {
        await act(async () => {
            render(<App />);
        });

        screen.debug(); // prints out the jsx in the App component unto the command line
    });
});
