import React, { Fragment, useContext, useEffect } from "react";

import ContactList from "../Contacts/ContactList";
import ContactForm from "../Contacts/ContactForm";

import AuthContext from "../../Context/Auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <ContactList />
      <ContactForm />
    </Fragment>
  );
};

export default Home;
