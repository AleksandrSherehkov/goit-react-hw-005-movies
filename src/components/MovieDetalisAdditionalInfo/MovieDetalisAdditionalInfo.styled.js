import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 40px;
  background: #07a6ff;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;

  background-color: #d4d4d4;
  margin-top: 20px;
  padding-top: 10px;
  background: #07a6ff;
`;

export const CustomLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: #244157;
  transition: color 250ms linear;
  color: #696969;

  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);
  &.active {
    text-decoration: underline;
    color: white;
  }

  :hover {
    color: #d1d1d1;
  }
`;
