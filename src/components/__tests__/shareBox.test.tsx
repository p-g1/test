import React from 'react';
import { render} from '@testing-library/react';
import ShareBox from '../shareBox/shareBox';

test('renders shareBox', () => {
  render(<ShareBox bannerItems={[{id: 1, background: "#fff"}]} />);

  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
