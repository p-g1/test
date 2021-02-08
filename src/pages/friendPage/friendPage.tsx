import React, { useState, useContext, FC } from 'react';
import staticData from '../../staticData/staticData';
import Header from '../../components/header/header';
import { PageDataContext } from '../../context/context';
import { Content, InputHolder, ButtonHolder, Button } from './friendPage.styled';
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
                <InnerPanel data-testId={"friendPage"}>
                    <Header title={friendPageHeader} center />
                    <Content>
                        <InputHolder>
                        <SmallHeader>{nameInputHeader}</SmallHeader>
                            <input data-testId={"emailInput"} value={name} onChange={e => updateName(e)}/>
                        </InputHolder>
                        <ButtonHolder>
                            <Button data-testId={"claimButton"} onClick={handleClaimClick} disabled={!name}>Claim</Button>
                            <Button onClick={handleRejectClick} >Reject</Button>
                        </ButtonHolder>
                    </Content>
                </InnerPanel>
            </OuterPanel>
        </Page>
    )
}

export default FriendPage;