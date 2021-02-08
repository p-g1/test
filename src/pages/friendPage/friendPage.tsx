import React, { useState, useContext, FC } from 'react';
import staticData from '../../staticData/staticData';
import Header from '../../components/header/header';
import { PageDataContext } from '../../context/context';
import { Content, InputHolder, ButtonHolder } from './friendPage.styled';
import { Page, OuterPanel, InnerPanel, SmallHeader } from '../pageBase/pageBase.styled';

type Props = {};

const FriendPage: FC<Props> = () => {
    const [name, setName] = useState('');
    const { friendPageHeader, nameInputHeader, rejectionMessage } = staticData;
    const {totalRewards, messages, updateRewardCount, updateMessages} = useContext(PageDataContext);

    const updateName = (e: any) => {
        setName(e.target.value);
      };

    const handleClaimClick = (): void => {
        console.log(PageDataContext); //working here

        if(name) {
            updateRewardCount(totalRewards + 1);
            updateMessages(`Your friend ${name} earned you a reward!`, messages)
            console.log(totalRewards, messages)
        }
    }
     
    const handleRejectClick = (): void => {
             updateMessages(rejectionMessage, messages)
             console.log(messages);
    }
    
    return (
        <Page>
            <OuterPanel>
                <InnerPanel>
                    <Header title={friendPageHeader} center />
                    <Content>
                        <InputHolder>
                        <SmallHeader>{nameInputHeader}</SmallHeader>
                            <input value={name} onChange={e => updateName(e)}/>
                        </InputHolder>
                        <ButtonHolder>
                            <button onClick={handleClaimClick} disabled={!name}>Claim</button>
                            <button onClick={handleRejectClick} >Reject</button>
                        </ButtonHolder>
                    </Content>
                </InnerPanel>
            </OuterPanel>
        </Page>
    )
}

export default FriendPage;