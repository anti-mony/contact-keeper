import React, { useState, useContext, useEffect } from "react";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

import ContactContext from "../../Context/Contact/contactContext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
}));

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  useEffect(() => {
    if (current != null) {
      setContact(current);
      setOpen(true);
    } else {
      setContact({ name: "", email: "", phone: "", type: "personal" });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setContact({ name: "", email: "", phone: "", type: "personal" });
    clearCurrent();
  };

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    handleClose();
  };

  const { name, email, phone, type } = contact;

  const classes = useStyles();

  return (
    <div>
      <Fab
        color='primary'
        aria-label='add'
        onClick={handleClickOpen}
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {current ? "Update Contact" : "Add Contact"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={onSubmit} className={classes.root}>
            <Box display='flex' flexDirection='column'>
              <TextField
                required
                label='Name'
                variant='outlined'
                name='name'
                value={name}
                onChange={onChange}
              />
              <TextField
                label='Email'
                variant='outlined'
                name='email'
                value={email}
                type='email'
                onChange={onChange}
              />
              <TextField
                label='Phone'
                variant='outlined'
                name='phone'
                value={phone}
                onChange={onChange}
              />
              <TextField
                select
                name='type'
                label='Type'
                value={type}
                onChange={onChange}
                variant='outlined'
              >
                <MenuItem key='personal' value='personal'>
                  Personal
                </MenuItem>
                <MenuItem key='professional' value='professional'>
                  Professional
                </MenuItem>
              </TextField>
              <Box display='flex' justifyContent='space-evenly'>
                <Button onClick={handleClose} color='primary'>
                  Cancel
                </Button>
                <Button type='submit' color='primary' value='Add Contact'>
                  Save
                </Button>
              </Box>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;
