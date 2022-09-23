import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/local-data';

const AddNotePage = () => {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return (
    <section>
      <NoteInput label='Buat Catatan Baru' submitNote={onAddNoteHandler} />
    </section>
  );
};

export default AddNotePage;
