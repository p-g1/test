import React, { FC } from 'react';
import SocialBannerItem, { ISocialBannerItemProps } from '../socialBannerItem/socialBannerItem';
import { Banner } from './socialBanner.styled';

export interface ISocialBannerProps {
    bannerItems: ISocialBannerItemProps[]
}

const SocialBanner: FC<ISocialBannerProps> = ({bannerItems}) => (
        <Banner>
            {bannerItems.map((item, i) => <SocialBannerItem id={item.id} key={item.id + i} background={item.background}/>)}
        </Banner>
)

export default SocialBanner;