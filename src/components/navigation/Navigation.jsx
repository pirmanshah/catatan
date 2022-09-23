import LinkItem from './LinkItem';
import { links } from '../../utils/links';

const Navigation = () => {
  return (
    <nav className='nav'>
      <LinkItem links={links} />
    </nav>
  );
};

export default Navigation;
