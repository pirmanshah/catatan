import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import NoteEmpty from './NoteEmpty';
import NoteItem from './NoteItem';

const home = 'Tidak ada catatan';
const archive = 'Tidak ada arsip';

const NoteList = ({ notes }) => {
  const { pathname } = useLocation();
  const label = pathname === '/archive' ? archive : home;

  if (!notes.length) {
    return <NoteEmpty label={label} />;
  }

  return (
    <div className='notes'>
      {notes.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NoteList;
