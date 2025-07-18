import "./Heading.css";
import PropTypes from 'prop-types';

export default function Heading({ userName, textColor }) {
  const style = { color: textColor };

  return (
    <div title="title" >
      <h1 style={style}>Name: {userName}</h1>
    </div>
  );
}

// Validate props
Heading.propTypes = {
  userName: PropTypes.string.isRequired, // userName must be a string
  textColor: PropTypes.string, // textColor must be a string
};

// Default props (optional)
Heading.defaultProps = {
  textColor: 'black', // Default color if not provided
};
