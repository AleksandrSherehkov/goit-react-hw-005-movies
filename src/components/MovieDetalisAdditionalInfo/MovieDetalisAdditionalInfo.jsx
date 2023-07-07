import { FcClapperboard, FcRules } from 'react-icons/fc';

import { CustomLink, Title, Wrapper } from './MovieDetalisAdditionalInfo.styled';

export const MovieDetalisAdditionalInfo = () => {
  return (
    <div>
      <Title>Additional Information</Title>
      <Wrapper>
        <li>
          <CustomLink to="cast">
            <FcClapperboard /> Cast
          </CustomLink>
        </li>
        <li>
          <CustomLink to="reviews">
            <FcRules /> Reviews
          </CustomLink>
        </li>
      </Wrapper>
    </div>
  );
};
