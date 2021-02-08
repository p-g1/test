import React from 'react';
import { render} from '@testing-library/react';
import LinkFeedPanel from '../linkFeedPanel/linkFeedPanel';

test('renders linkFeedPanel', () => {
    const { getByTestId } = render(<LinkFeedPanel />);
    const id = getByTestId("linkFeedPanel");
    expect(id).toBeInTheDocument();
});
