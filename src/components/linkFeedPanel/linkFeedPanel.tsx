import React, { FC } from 'react';
import ActivityFeed from '../activityFeed/activityFeed';
import ShareLink from '../shareLink/shareLink';
import { Panel } from './linkFeedPanel.styled';
import staticData from '../../staticData/staticData';

const LinkFeedPanel: FC = () => {

  const { link } = staticData;

    return (
        <Panel>
          <ShareLink link={link}/>
          <ActivityFeed />
        </Panel>
    )
}

export default LinkFeedPanel;