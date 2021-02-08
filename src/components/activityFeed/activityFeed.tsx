import React, { useContext, FC } from 'react';
import { Panel, WelcomeMessage, Header } from './activityFeed.styled';
import FeedItem from '../feedItem/feedItem';
import RewardsCount from '../rewardsCount/rewardsCount';
import staticData from '../../staticData/staticData';
import { PageDataContext } from '../../context/context';
import { faSmile, faSadTear, faGrinSquint, faMeh } from "@fortawesome/free-solid-svg-icons";

const ActivityFeed: FC = () => {

    const emojis = [faSmile, faSadTear, faGrinSquint, faMeh];
    const { totalRewards, messages } = useContext(PageDataContext);
    const { welcomeMessage, welcomeMessageWithReferrals, emptyActivityFeed, rewardCountHeader } = staticData;

    return (
        <div>
            <WelcomeMessage>
                {totalRewards ?
                     welcomeMessageWithReferrals
                    : welcomeMessage
                    }
            </WelcomeMessage>
            <Header>Activity Feed</Header>
            <Panel>
                {
                messages.length ?
                    messages.map((item, i) => <FeedItem key={item.message + i} emoji={emojis[item.icon]} text={item.message}></FeedItem>)
                    : <FeedItem emoji={emojis[3]} text={emptyActivityFeed}></FeedItem>
                    }
            </Panel>
            <RewardsCount 
                title={rewardCountHeader} 
                count={totalRewards}
            />
        </div>
    )
}

export default ActivityFeed;