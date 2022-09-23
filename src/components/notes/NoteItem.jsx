import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiEdit, FiBook } from 'react-icons/fi';
import { formattedDate } from '../../utils/local-data';
import Button from '../Button';

const NoteItem = ({ id, title, body, createdAt }) => {
  const date = formattedDate(createdAt);

  return (
    <div className='notes-card'>
      <div className='notes-card__title'>
        <h2>
          <Link to={`/notes/${id}`}>{title}</Link>
        </h2>
      </div>
      <div className='notes-card__body'>
        {body.length > 100 ? `${body.substring(0, 100)}...` : body}
      </div>
      <div className='notes-card__date'>{date}</div>
      <div className='notes-card__action'>
        <Link to={`/notes/${id}`}>
          <Button label='Detail' className='btn-secondary' icon={<FiBook />} />
        </Link>
        <Link to={`/edit/${id}`}>
          <Button label='Edit' className='btn-primary' icon={<FiEdit />} />
        </Link>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default NoteItem;
