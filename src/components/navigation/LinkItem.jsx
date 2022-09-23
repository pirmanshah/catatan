import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';

const LinkItem = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <ul>
      {links.map(({ url, description, icon }) => (
        <li key={url}>
          <Link to={url}>
            <Button
              icon={icon}
              label={description}
              className={`btn-primary ${pathname === url ? 'active' : ''}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

LinkItem.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default LinkItem;
