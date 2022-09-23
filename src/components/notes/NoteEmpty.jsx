import PropTypes from 'prop-types';

const NoteEmpty = ({ label }) => {
  return (
    <div className='notes-empty'>
      <img src='/img/note_empty.svg' alt='' />
      <p>{label}</p>
    </div>
  );
};

NoteEmpty.propTypes = {
  label: PropTypes.string.isRequired
};

export default NoteEmpty;
