import React, { FC } from 'react';
import { Text, Item, Emoji } from './feedItem.styled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IFeedItemProps {
    text: string,
    emoji?: any
}

const FeedItem: FC<IFeedItemProps> = ({emoji, text}) => {
    return (
        <Item>
            {emoji && <Emoji>
                        <FontAwesomeIcon icon={emoji} size="2x" /> 
                     </Emoji>
            }
            <Text>{text}</Text>
        </Item>
    )
}

export default FeedItem;