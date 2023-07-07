import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #07a6ff;
  margin: 0 auto;

  padding: 20px 20px;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const CustomLink = styled(NavLink)`
  font-size: 20px;
  font-weight: 700;
  color: #244157;
  transition: color 250ms linear;
  color: #d9d9d9;

  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);
  &.active {
    text-decoration: underline;
    color: white;
  }

  :hover {
    color: #e6fbff;
  }
`;
