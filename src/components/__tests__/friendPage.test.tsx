import React from 'react';
import { render} from '@testing-library/react';
import FriendPage from '../../pages/friendPage/friendPage';
import { BrowserRouter as Router } from "react-router-dom";

test('renders friendPage', () => {
    const { getByTestId } = render(<Router>
                                    <FriendPage />
                                </Router>
                                );
    const header = getByTestId("friendPage");
    expect(header).toBeInTheDocument();
});

test('renders friendPage with disabled claim button', () => {
    const { getByTestId } = render(<Router>
                                    <FriendPage />
                                </Router>
                                );
    const button = getByTestId("claimButton");
    expect(button).toHaveAttribute("disabled");

    const emailInput = getByTestId("emailInput");
    
    (emailInput as HTMLInputElement).value = "test@email";
    expect(button).not.toHaveAttribute("enabled");
});
