import styled from 'styled-components';

type CenterProps = {
  center: boolean
}

export const Title = styled.h1<CenterProps>`
  font-size: 3em;
  padding: 10px;
  margin: 0;
  color: #666666;
  text-align: ${props => props.center ? "center" : "left" };
`;