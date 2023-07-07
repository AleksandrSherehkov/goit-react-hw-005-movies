import styled from 'styled-components';

export const Title = styled.p`
  display: grid;
  place-items: center;
  height: 40px;
  width: 250px;
  font-weight: bold;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
  align-items: 'center';
`;

export const Poster = styled.img`
  width: 250px;
`;
export const VoteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;
export const Value = styled.span`
  font-weight: 700;
  color: #e62600;
`;
