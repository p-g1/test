import styled from 'styled-components';

interface IBackgroundProps {
    background: string
  }
  
export const Item = styled.div<IBackgroundProps>`
  flex: 1;
  height: 50px;
  background: ${props => props.background};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;