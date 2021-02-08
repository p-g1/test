import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EFEFEF;
  color: #9D9D9D;
`;

export const OuterPanel = styled.div`
  width: 75vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #EFEFEF;
`;

export const InnerPanel = styled.div`
  width: 70%;
  height: 90%;
  justify-content:center;
  align-items: center;
  padding: 10px;
  background: #FFF;
`;

export const SmallHeader = styled.div`
  margin: 10px;
`;

interface ITextAlignProps {
  textalign: string
}

export const StyledLink = styled(Link)<ITextAlignProps>`
  padding: 20px;
  color: #666666;
  font-weight: 700;
  width: 70%;
  text-align: ${props => props.textalign};
  text-decoration: none;
  cursor: pointer;
`;