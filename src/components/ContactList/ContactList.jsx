import styles from './ContactList.module.scss';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id} name={name} number={number} />
    ))}
  </ul>
);
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default ContactList;
