import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkGoBack = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100px;
  height: 20px;
  margin-bottom: 5px;
  margin-top: 5px;
  padding: 5px 0;
  color: #504e61;

  font-size: 14px;
  font-weight: bold;

  background-color: #07a6ff;

  border: none;

  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear;

  :hover {
    background-color: #3888ff;
    color: #c2c2c2;
  }
`;
