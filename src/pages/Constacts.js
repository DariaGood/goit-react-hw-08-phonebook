import { Box, ContactsContainer } from 'components/styles/Element.styled';
import { Filter } from 'components/filter/Filter';
import { H1 } from 'components/title/Title';
import { ContactList } from 'components/contactList/ContactList';
import { ContactForm } from 'components/contactForm/ContactForm';

const Contacts = () => {
  return (
    <ContactsContainer>
      <Box>
        <H1 title="Phonebook" />
        <ContactForm />
      </Box>
      <Box>
        <H1 title="Contacts" />
        <Filter title="Find contact by name" />
        <ContactList />
      </Box>
    </ContactsContainer>
  );
};
export default Contacts;