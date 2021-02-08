import React from 'react';
import { render} from '@testing-library/react';
import SocialBannerItem from '../socialBannerItem/socialBannerItem';

test('renders socialBannerItem', () => {
  render(<SocialBannerItem id={2} background={"#000"}/>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
