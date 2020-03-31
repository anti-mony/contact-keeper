import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../Context/Contact/contactContext";

import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    e.preventDefault();
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
      }}
    >
      <TextField
        id='search'
        name='text'
        type='text'
        inputRef={text}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search />
            </InputAdornment>
          )
        }}
        placeholder='Filter Contacts...'
        onChange={onChange}
        size='small'
        style={{
          backgroundColor: "#eeeeee"
        }}
        variant='outlined'
        fullWidth
      />
    </form>
  );
};

export default ContactFilter;
