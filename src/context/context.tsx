import React, { useState, FC } from 'react';

export interface ImessageIcon {
    icon: number,
    message: string
}

export interface IDefaultContext {
    totalRewards: number,
    messages: ImessageIcon[],
    updateRewardCount: (newValue:number) => void
    updateMessages: (newValue: ImessageIcon, messages: ImessageIcon[]) => void
}

const initialState: IDefaultContext = {
    totalRewards: 0, 
    messages: [], 
    updateRewardCount: () => {},
    updateMessages: () => {}
};

export let PageDataContext = React.createContext<IDefaultContext>(initialState);

interface Props {
    children: React.ReactNode
};

const PageDataProvider: FC<Props> = ({children}) => {
  
    let [totalRewards, setTotalRewards] = useState(initialState.totalRewards);
    const [messages, setMessages] = useState(initialState.messages);

    const updateRewardCount = (newValue: number) => {
        setTotalRewards(newValue);
    }

    const updateMessages = (newValue: ImessageIcon, messages: ImessageIcon[]) => {
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