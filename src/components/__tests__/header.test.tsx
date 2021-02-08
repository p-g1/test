import React from 'react';
import { render} from '@testing-library/react';
import Header from '../header/header';

test('renders header', () => {
    const { getByText } = render(<Header title={"test"} center={true}/>);
    const text = getByText("test");
    expect(text).toBeInTheDocument();
});
