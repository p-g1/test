import React, { useState, FC } from 'react';

type DefaultContext = {
    totalRewards: number,
    messages: string[],
    updateRewardCount: (newValue:number) => void
    updateMessages: (newValue:string, messages:string[]) => void
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

    const updateMessages = (newValue: string, messages: string[]) => {
        messages.unshift(newValue);
        console.log(messages);
        setMessages([...messages]);
    }

    const contextValue = {
        totalRewards,
        messages, 
        updateRewardCount,
        updateMessages
    }

    PageDataContext = React.createContext(contextValue);
    // console.log(PageDataContext);
    return (
        <PageDataContext.Provider value={contextValue}>
            {children}
        </PageDataContext.Provider>
    );
};

export default PageDataProvider;