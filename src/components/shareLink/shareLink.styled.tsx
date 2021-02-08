import styled from 'styled-components';

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  height: 50px;
  width: 100%;
  background: #EFEFEF;
`;

export const Link = styled.p`
  padding: 2px 10px;
  flex: 3;
`;

export const ButtonContainer = styled.div`
    flex: 1;
    height: 100%;
    position: absolute;
    right: 0;
    width: 20%;
`;

export const Button = styled.button`
    background: #509D01;
    width: 100%;
    color: white;
    border: none;
    height: 100%;
    cursor: pointer;
`;