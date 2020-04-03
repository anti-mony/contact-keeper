import React, { useContext, useEffect, Fragment } from "react";
import ContactContext from "../../Context/Contact/contactContext";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ContactItem from "../Contacts/ContactItem";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

const ContactList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    //eslint-disable-next-line
  }, []);

  if (contacts !== null && contacts.length === 0 && !loading) {
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
    <Fragment>
      {contacts !== null && !loading ? (
        <Grid container direction='row'>
          {filtered !== null
            ? filtered.map(contact => (
                <Grid item xs={12} sm={6} md={3} key={contact._id}>
                  <ContactItem contact={contact}></ContactItem>
                </Grid>
              ))
            : contacts.map(contact => (
                <Grid item xs={12} sm={6} md={3} key={contact._id}>
                  <ContactItem contact={contact}></ContactItem>
                </Grid>
              ))}
          {}
        </Grid>
      ) : (
        <Fragment>
          <LinearProgress variant='query' />
          <LinearProgress variant='query' color='secondary' />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ContactList;
