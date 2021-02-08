import styled from 'styled-components';

export const Panel = styled.div`
  height: 165px;
  overflow-x: hidden;
  overflow-y:scroll;
  width: 100%;

  & >div:nth-child(even) {
    background: #EFEFEF;
  }

  & >div:nth-child(odd) {
    background: #F7F7F7;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 2px 10px;
  height: 30px;
  color: #666666;
  background: #EFEFEF;
`;

export const WelcomeMessage = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  padding: 20px 0px;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;