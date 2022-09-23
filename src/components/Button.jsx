import PropTypes from 'prop-types';

const Button = ({ label, icon, className, onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      <span className='icon'>{icon}</span> {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
