import PropTypes from 'prop-types';
import { formattedDate } from '../../utils/local-data';

const NoteDetailTitle = ({ title, createdAt }) => {
  const date = formattedDate(createdAt);

  return (
    <div className='note-detail__title'>
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
};

NoteDetailTitle.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default NoteDetailTitle;
