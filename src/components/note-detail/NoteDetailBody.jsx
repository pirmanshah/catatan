import PropTypes from 'prop-types';

const NoteDetailBody = ({ body }) => {
  return (
    <div className='note-detail__body'>
      <p>{body}</p>
    </div>
  );
};

NoteDetailBody.propTypes = {
  body: PropTypes.string.isRequired
};

export default NoteDetailBody;
