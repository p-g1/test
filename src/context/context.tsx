import React, { useState, FC } from 'react';

type messageIcon = {
    icon: number,
    message: string
}

type DefaultContext = {
    totalRewards: number,
    messages: messageIcon[],
    updateRewardCount: (newValue:number) => void
    updateMessages: (newValue:messageIcon, messages:messageIcon[]) => void
}

const initialState: DefaultContext = {
    totalRewards: 0, 
    messages: [], 
    updateRewardCount: () => {},
    updateMessages: () => {}
};

export let PageDataContext = React.createContext<DefaultContext>(initialState);

type Props = {
    children: React.ReactNode
};

const PageDataProvider: FC<Props> = ({children}) => {
  
    let [totalRewards, setTotalRewards] = useState(initialState.totalRewards);
    const [messages, setMessages] = useState(initialState.messages);

    const updateRewardCount = (newValue: number) => {
        setTotalRewards(newValue);
    }

    const updateMessages = (newValue: messageIcon, messages: messageIcon[]) => {
        messages.unshift(newValue);
        setMessages([...messages]);
    }

    const contextValue = {
        totalRewards,
        messages, 
        updateRewardCount,
        updateMessages
    }

    return (
        <PageDataContext.Provider value={contextValue}>
            {children}
        </PageDataContext.Provider>
    );
};

export default PageDataProvider;