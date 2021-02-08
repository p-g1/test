import React from 'react';
import { render} from '@testing-library/react';
import RewardsCount from '../rewardsCount/rewardsCount';

test('renders feedItem', () => {
  render(<RewardsCount title={"test"} count={1}/>);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
