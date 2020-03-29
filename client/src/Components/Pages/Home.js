import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import ContactList from "../Contacts/ContactList";
import ContactForm from "../Contacts/ContactForm";

const Home = () => {
  return (
    <Fragment>
      <ContactList />
      <ContactForm />
    </Fragment>
  );
};

export default Home;
