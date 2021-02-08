import React from 'react';
import { render} from '@testing-library/react';
import SocialBanner from '../socialBanner/socialBanner';

test('renders socialBanner', () => {
  render(<SocialBanner bannerItems={[{id: 1, background: "#fff"}]}/>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
