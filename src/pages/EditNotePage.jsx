import React from 'react';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import NoteEmpty from '../components/notes/NoteEmpty';
import { getNote, editNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';

const EditNotePageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  function onEditHandler(note) {
    const edited = {
      id,
      ...note
    };
    editNote(edited);
    navigate('/');
  }

  return <EditNotePage id={id} onEdit={onEditHandler} />;
};

class EditNotePage extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      notes: getNote(props.id)
    };
  }

  onEdit(note) {
    this.props.onEdit(note);
  }

  render() {
    if (!this.state.notes) {
      return (
        <div className='content'>
          <NoteEmpty label='Catatan tidak ditemukan' />
        </div>
      );
    }

    return <NoteInput label='Edit Note' {...this.state.notes} submitNote={this.onEdit} />;
  }
}

EditNotePage.propTypes = {
  id: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default EditNotePageWrapper;
