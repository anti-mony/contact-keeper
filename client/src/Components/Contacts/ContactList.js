import React, { useContext } from "react";
import ContactContext from "../../Context/Contact/contactContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ContactItem from "../Contacts/ContactItem";

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <Grid container direction='row'>
      {contacts.map(contact => (
        <Grid item xs={12} sm={6} md={3} key={contact.id}>
          <ContactItem contact={contact}></ContactItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactList;
