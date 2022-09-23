import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className='searchbar'>
      <input
        type='text'
        value={keyword}
        className='form-control'
        placeholder='Cari berdasarkan judul ...'
        onChange={(event) => keywordChange(event.target.value)}
      />
    </div>
  );
};

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
};

export default SearchBar;
