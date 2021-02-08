import React, { useState, useContext, FC } from 'react';
import staticData from '../../staticData/staticData';
import Header from '../../components/header/header';
import { PageDataContext } from '../../context/context';
import { Content, InputHolder, ButtonHolder } from './friendPage.styled';
import { Page, OuterPanel, InnerPanel, SmallHeader, StyledLink } from '../pageBase/pageBase.styled';

interface IProps {};

const FriendPage: FC<IProps> = () => {
    const [name, setName] = useState('');
    const { friendPageHeader, nameInputHeader, rejectionMessage } = staticData;
    const {totalRewards, messages, updateRewardCount, updateMessages} = useContext(PageDataContext);

    const updateName = (e: any) => {
        setName(e.target.value);
      };

    const handleClaimClick = (): void => {
        if(name) {
            updateRewardCount(totalRewards + 1);
            setName("");
            updateMessages({icon: 0, message:`Your friend ${name} earned you a reward!`}, messages)
        }
    }
     
    const handleRejectClick = (): void => {
             updateMessages({icon: 1, message: rejectionMessage}, messages)
    }
    
    return (
        <Page>
            <OuterPanel>
                <StyledLink textalign={"left"} to="/share">Share Page</StyledLink>
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