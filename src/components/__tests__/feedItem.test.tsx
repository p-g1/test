import React from 'react';
import { render} from '@testing-library/react';
import FeedItem from '../feedItem/feedItem';

test('renders feedItem with correct text', () => {
    const { getByText } = render(<FeedItem text={"test"}/>);
    const text = getByText("test");
    expect(text).toBeInTheDocument();
});
