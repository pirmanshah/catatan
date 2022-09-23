import PropTypes from 'prop-types';
import NoteDetailAction from './NoteDetailAction';
import NoteDetailBody from './NoteDetailBody';
import NoteDetailTitle from './NoteDetailTitle';

const NoteDetail = ({ id, title, createdAt, body, archived, onArchived, onDelete }) => {
  return (
    <section className='note-detail'>
      <NoteDetailTitle title={title} createdAt={createdAt} />
      <NoteDetailBody body={body} />
      <NoteDetailAction
        archived={archived}
        onDelete={() => onDelete(id)}
        onArchived={() => onArchived(id)}
      />
    </section>
  );
};

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default NoteDetail;
