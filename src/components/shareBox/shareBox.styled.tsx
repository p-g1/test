import styled from 'styled-components';

export const Panel = styled.div`
  background: #EFEFEF;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 46%;
  max-height: 360px;
  height: 360px;
`;

export const Button = styled.button`
    color: white;
    background: #509D01;
    padding: 20px;
    font-weight: 700;
    width: 40%;
    position: absolute;
    bottom: 10px;
    left: 10px;
    height: 22px;
    line-height: 0;
    outline: none;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }

    &:hover:not(:disabled) {
      background: #366b01;
    }
`;

export const Email = styled.strong`
  font-weight: 700;
  color: #666666;
`;

export const SenderInfo = styled.div`
  padding: 20px;
  padding-left: 10px;
  padding-bottom: 10px;
  text-align: left;
`;

export const EmailInput = styled.input`
  padding: 10px;
  width: 86%;
  border: none;
  margin: 10px;
  color: #9D9D9D;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;

export const EmailText = styled.textarea`
  padding: 10px;
  width: 86%;
  height: 100px;
  border: none;
  margin: 10px;
  resize: none;
  color: #9D9D9D;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;