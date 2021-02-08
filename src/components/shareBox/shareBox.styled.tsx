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
    height: 30px;
`;

export const Email = styled.strong`
  font-weight: 700;
  color: #666666;
`;

export const SenderInfo = styled.div`
  padding: 20px;
`;

export const EmailInput = styled.input`
  padding: 10px;
  width: 80%;
  border: none;
  margin: 10px;
`;

export const EmailText = styled.textarea`
  padding: 10px;
  width: 80%;
  border: none;
  margin: 10px;
`;