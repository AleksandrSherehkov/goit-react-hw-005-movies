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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Poster = styled.img`
  width: 150px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 16px;

  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
`;
