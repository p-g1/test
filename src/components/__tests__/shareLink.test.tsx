import React from 'react';
import { render} from '@testing-library/react';
import ShareLink from '../shareLink/shareLink';

test('renders shareLink', () => {
    const { getByText } = render(<ShareLink link={"test"}/>);
    const link = getByText("test");
    expect(link).toBeInTheDocument();
});
