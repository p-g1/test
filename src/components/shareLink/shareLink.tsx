import React, { FC } from 'react';
import { LinkContainer, Link, ButtonContainer, Button } from './shareLink.styled';
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IShareLinkProps {
    link: string;
}

const ShareLink: FC<IShareLinkProps> = ({link}) => {
    return (
        <LinkContainer>
            <Link>{link}</Link> 
            <ButtonContainer>
                <Button>
                    <FontAwesomeIcon icon={faClipboard} size="2x" />
                </Button>
            </ButtonContainer>
        </LinkContainer>
    )
}

export default ShareLink;