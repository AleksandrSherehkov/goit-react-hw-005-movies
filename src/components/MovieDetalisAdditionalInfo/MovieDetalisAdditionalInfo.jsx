import { FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export const MovieDetalisAdditionalInfo = () => {
  return (
    <div>
      <p>Additional Information</p>
      <ul>
        <li>
          <NavLink to="cast">
            <FaChevronRight /> Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews">
            <FaChevronRight /> Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
