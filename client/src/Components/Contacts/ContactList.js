import React, { useContext } from "react";
import ContactContext from "../../Context/Contact/contactContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ContactItem from "../Contacts/ContactItem";
import Typography from "@material-ui/core/Typography";

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        margin='16px'
        flexDirection='column'
      >
        <Box>
          <Typography variant='h2' gutterBottom>
            ADD SOME CONTACTS, MAKE SOME FRIENDS, HAVE A GOOD DAY
          </Typography>
        </Box>
        <Box>
          <Typography variant='subtitle1'>All that stuff you know</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Grid container direction='row'>
      {filtered !== null
        ? filtered.map(contact => (
            <Grid item xs={12} sm={6} md={3} key={contact.id}>
              <ContactItem contact={contact}></ContactItem>
            </Grid>
          ))
        : contacts.map(contact => (
            <Grid item xs={12} sm={6} md={3} key={contact.id}>
              <ContactItem contact={contact}></ContactItem>
            </Grid>
          ))}
      {}
    </Grid>
  );
};

export default ContactList;
