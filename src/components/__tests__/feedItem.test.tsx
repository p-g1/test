import React from 'react';
import { render} from '@testing-library/react';
import FeedItem from '../feedItem/feedItem';

test('renders feedItem', () => {
  render(<FeedItem text={"test"}/>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
