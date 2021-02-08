import React from 'react';
import { render } from '@testing-library/react';
import ActivityFeed from '../activityFeed/activityFeed';

test('renders activityFeed', () => {
    const { getByText } = render(<ActivityFeed />);
    const header = getByText("Activity Feed");
    expect(header).toBeInTheDocument();
  });

  test('renders activityFeedwithEmptyContext', () => {
    const { getByText } = render(<ActivityFeed />);
    const header = getByText("No activity to show");
    expect(header).toBeInTheDocument();
  });