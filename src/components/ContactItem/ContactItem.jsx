import PropTypes from 'prop-types';
import styles from './ContactItem.module.scss';

const ContactItem = ({ name, number }) => (
  <li name={name} number={number}>
    {name}:{number}
  </li>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
export default ContactItem;
