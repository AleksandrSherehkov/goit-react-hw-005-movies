import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Poster = styled.img`
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #0022cc;
`;

export const Release = styled.p`
  font-size: 16px;

  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
`;

export const Value = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

export const WrapperGenres = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-bottom: 90px;
`;

export const GanresName = styled.p`
  font-size: 16px;
  font-weight: bold;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
`;

export const Overview = styled.p`
  font-style: italic;
  font-size: 18px;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #504e61;
  margin-bottom: 90px;
`;

export const ValueVote = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  color: #ff7733;
`;

export const WrapperVote = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
