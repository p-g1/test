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

  &:first-of-type {
    position: relative;

    &::after {
      position: absolute;
      top: 100%;
      left: calc(50% - 5px);
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #9b9b9b;
      content: " ";
      font-size: 0;
      line-height: 0;
      margin-left: -5px;
      width: 0;
    }
  }
`;