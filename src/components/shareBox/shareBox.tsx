import React, { useState, useContext, FC } from 'react';
import SocialBanner, { ISocialBannerProps } from '../socialBanner/socialBanner';
import { PageDataContext, IDefaultContext } from '../../context/context';
import { Panel, Button, Email, SenderInfo, EmailInput, EmailText } from './shareBox.styled';
import staticData from '../../staticData/staticData';

const ShareBox: FC<ISocialBannerProps> = ({bannerItems}) => {
    const { enteredOwnEmail, senderEmail, emailText } = staticData;
    const {messages, updateMessages} = useContext<IDefaultContext>(PageDataContext);
    const [email, setEmail] = useState<string>('');
    
    const updateEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
      };

    const updateEmailContent = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setEmail(e.target.value);
    };
 
    const handleSendEmailClick = (): void => {
        if(email && email === senderEmail ) {
            updateMessages({icon: 2, message: enteredOwnEmail}, messages)
        }
    }

    return (
        <Panel>
            <SocialBanner bannerItems={bannerItems}/>
            <SenderInfo>From <Email>{senderEmail}</Email></SenderInfo>
            <EmailInput value={email} onChange={e => updateEmail(e)} placeholder="Email address" />
            <EmailText value={emailText} onChange={e => updateEmailContent(e)}></EmailText>
            <Button onClick={handleSendEmailClick} disabled={!email}>Send Email</Button>
        </Panel>
    )
}

export default ShareBox;