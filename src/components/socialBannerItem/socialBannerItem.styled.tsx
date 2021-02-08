import styled from 'styled-components';

type BackgroundProps = {
    background: string
  }
  
export const Item = styled.div<BackgroundProps>`
  flex: 1;
  height: 50px;
  background: ${props => props.background};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;