import React from 'react';
import { render} from '@testing-library/react';
import ShareBox from '../shareBox/shareBox';

test('renders shareBox', () => {
    const { getByTestId } = render(<ShareBox bannerItems={[{id: 1, background: "#fff"}]} />);
    const text = getByTestId("banner-item");
    expect(text).toBeInTheDocument();
});