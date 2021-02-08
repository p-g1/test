import React from 'react';
import { render} from '@testing-library/react';
import SharePage from '../../pages/sharePage/sharePage';
import { BrowserRouter as Router } from "react-router-dom";


test('renders sharePage', () => {
  render(
        <Router>
            <SharePage />
        </Router>
        );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
