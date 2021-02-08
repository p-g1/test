import React, { FC, ReactNode } from 'react';
import { Item } from './socialBannerItem.styled';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ISocialBannerItemProps {
    id: string,
    background: string
}

const SocialBannerItem: FC<ISocialBannerItemProps> = ({background}) => {

    return (
        <Item background={background}>
           <FontAwesomeIcon icon={faEnvelope} size="2x" /> 
        </Item>  
    )
}

export default SocialBannerItem;