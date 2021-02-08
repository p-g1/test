import React from 'react';
import { render} from '@testing-library/react';
import SocialBanner from '../socialBanner/socialBanner';

test('renders socialBanner', () => {
    const { getAllByTestId } = render(<SocialBanner bannerItems={[{id: 1, background: "#fff"}]}/>);
    const bannerItems = getAllByTestId("banner-item");
    expect(bannerItems).toHaveLength(1);
});
