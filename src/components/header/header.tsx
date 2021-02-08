import React, { FC } from 'react';
import { Title } from './header.styled';

interface IHeaderProps {
    title: string,
    center: boolean
}

const Header: FC<IHeaderProps> = ({title, center}) => {
    return (
        <Title center={center}>{title}</Title>
    )
}

export default Header;