import React, { FC } from 'react';
import { LinkContainer, Link, ButtonContainer, Button } from './shareLink.styled';
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IShareLinkProps {
    link: string;
}

const ShareLink: FC<IShareLinkProps> = ({link}) => {
  
  function copyToClipboard() {
      const text = document.getElementById("link")?.innerText || "";
      navigator.clipboard.writeText(text);
    };

    return (
        <LinkContainer>
            <Link id="link">{link}</Link> 
            <ButtonContainer>
                <Button onClick={copyToClipboard}>
                    <FontAwesomeIcon icon={faClipboard} size="2x" />
                </Button>
            </ButtonContainer>
        </LinkContainer>
    )
}

export default ShareLink;