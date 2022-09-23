import React from 'react';
import autoBind from 'auto-bind';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/notes/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes, deleteNote } from '../utils/local-data';

const ArchivePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
};

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || ''
    };
  }

  onDeleteHandler(id) {
    deleteNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        contacts: getArchivedNotes()
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <div className='content'>
          <NoteList notes={notes} />
        </div>
      </section>
    );
  }
}

ArchivePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired
};

export default ArchivePageWrapper;
