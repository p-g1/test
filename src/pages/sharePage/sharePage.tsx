import React, { FC } from 'react';
import LinkFeedPanel from '../../components/linkFeedPanel/linkFeedPanel';
import ShareBox from '../../components/shareBox/shareBox';
import Header from '../../components/header/header';
import staticData from '../../staticData/staticData';
import { Content } from './sharePage.styled';
import { Page, OuterPanel, InnerPanel, SmallHeader, StyledLink } from '../pageBase/pageBase.styled';


const SharePage: FC = () => {
    const { header, linkHeader, socialBanner } = staticData;

    return (
        <Page>
        <OuterPanel>
            <StyledLink textalign={"right"} to="/friend">Friend Page</StyledLink>
            <InnerPanel>
                <Header title={header} center={false} />
                <SmallHeader>{linkHeader}</SmallHeader>
                <Content>
                    <LinkFeedPanel />
                    <ShareBox bannerItems={socialBanner}/>
                </Content>
            </InnerPanel>
        </OuterPanel>
        </Page>
    )
}

export default SharePage;