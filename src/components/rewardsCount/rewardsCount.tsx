import React, { FC } from 'react';
import { Title, Container, Count } from './rewardsCount.styled';

interface IRewardsCountProps {
    title: string,
    count: number
}

const RewardsCount: FC<IRewardsCountProps> = ({title, count}) => {

    return (
        <Container>
            <Title>{title}</Title>
            <Count>{count}</Count>
        </Container>
    )
}

export default RewardsCount;