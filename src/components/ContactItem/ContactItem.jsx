import PropTypes from 'prop-types';
import styles from './ContactItem.module.scss';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li name={name} number={number}>
    {name}:{number}
    <button
      type="button"
      onClick={() => {
        onDelete(id);
      }}
    >
      Delete
    </button>
  </li>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
export default ContactItem;
