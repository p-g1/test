import React from 'react';
import { render} from '@testing-library/react';
import RewardsCount from '../rewardsCount/rewardsCount';

test('renders rewardsCount', () => {
    const { getByText } = render(<RewardsCount title={"test"} count={1}/>);
    const text = getByText("test");
    expect(text).toBeInTheDocument();
});
