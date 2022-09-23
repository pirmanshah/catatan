import PropTypes from 'prop-types';
import { FiInbox, FiTrash2 } from 'react-icons/fi';
import Button from '../Button';

const NoteDetailAction = ({ archived, onArchived, onDelete }) => {
  const labelArsip = archived ? 'Buka arsip' : 'Arsipkan';

  return (
    <div className='note-detail__action'>
      <Button
        label={labelArsip}
        icon={<FiInbox />}
        className='btn-secondary'
        onClick={onArchived}
      />
      <Button label='Hapus' icon={<FiTrash2 />} className='btn-danger' onClick={onDelete} />
    </div>
  );
};

NoteDetailAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  onArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default NoteDetailAction;
