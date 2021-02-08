import React from 'react';
import { render} from '@testing-library/react';
import FriendPage from '../../pages/friendPage/friendPage';
import { BrowserRouter as Router } from "react-router-dom";

test('renders friendPage', () => {
  render(<Router>
            <FriendPage />
         </Router>
         );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
