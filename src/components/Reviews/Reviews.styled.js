import styled from 'styled-components';

export const WraperList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Card = styled.li`
  padding: 20px;
  border: 2px dotted #1c6ea4;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Avtor = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
  margin-bottom: 10px;
`;

export const Contetnt = styled.p`
  font-style: italic;
  font-size: 16px;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
`;

export const NoContetnt = styled.p`
  font-size: 24px;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
`;
