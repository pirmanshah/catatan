import React from 'react';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import NoteDetail from '../components/note-detail/NoteDetail';
import NoteEmpty from '../components/notes/NoteEmpty';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';

const NoteDetailPageWrapper = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate('/');
  }

  function onArchivedHandler(id) {
    const { archived } = getNote(id);
    if (archived) {
      unarchiveNote(id);
      return navigate('/');
    }
    archiveNote(id);
    navigate('/archive');
  }

  return <NoteDetailPage id={id} onDelete={onDeleteHandler} onArchived={onArchivedHandler} />;
};

class NoteDetailPage extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      notes: getNote(props.id)
    };
  }

  onDelete(id) {
    this.props.onDelete(id);
  }

  onArchived(id) {
    this.props.onArchived(id);
  }

  render() {
    if (!this.state.notes) {
      return (
        <div className='content'>
          <NoteEmpty label='Catatan tidak ditemukan' />
        </div>
      );
    }

    return (
      <NoteDetail {...this.state.notes} onDelete={this.onDelete} onArchived={this.onArchived} />
    );
  }
}

NoteDetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchived: PropTypes.func.isRequired
};

export default NoteDetailPageWrapper;
