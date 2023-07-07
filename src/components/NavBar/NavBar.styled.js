import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #07a6ff;

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

  &.active {
    text-decoration: underline;
  }

  :hover {
    color: #e6fbff;
  }
`;
