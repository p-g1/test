import React, { FC } from 'react';
import { Item } from './socialBannerItem.styled';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ISocialBannerItemProps {
    id: number,
    background: string
}

const SocialBannerItem: FC<ISocialBannerItemProps> = ({id, background}) => {
    const icons = [faEnvelope, faFacebookF, faTwitter, faLinkedinIn]

    return (
        <Item background={background}>
           <FontAwesomeIcon icon={icons[id]} size="2x" /> 
        </Item>  
    )
}

export default SocialBannerItem;