import React, { Fragment } from "react";

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
