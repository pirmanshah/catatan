import React from 'react';
import autobind from 'auto-bind';
import PropTypes from 'prop-types';
import { FiSave } from 'react-icons/fi';
import Button from './Button';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);

    // inisialisasi state
    this.state = {
      title: props.title || '',
      body: props.body || ''
    };
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.submitNote(this.state);
  }

  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <h1>{this.props.label}</h1>
        <input
          type='text'
          placeholder='Judul'
          className='form-control'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          rows='6'
          type='text'
          placeholder='Catatan'
          className='form-control'
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <Button label='Simpan' icon={<FiSave />} className='btn-success' />
      </form>
    );
  }
}

NoteInput.propTypes = {
  submitNote: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default NoteInput;
