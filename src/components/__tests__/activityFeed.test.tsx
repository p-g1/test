import React from 'react';
import { render} from '@testing-library/react';
import ActivityFeed from '../activityFeed/activityFeed';

test('renders activityFeed', () => {
  render(<ActivityFeed />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
