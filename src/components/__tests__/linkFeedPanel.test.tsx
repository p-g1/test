import React from 'react';
import { render} from '@testing-library/react';
import LinkFeedPanel from '../linkFeedPanel/linkFeedPanel';

test('renders learn react link', () => {
  render(<LinkFeedPanel />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
