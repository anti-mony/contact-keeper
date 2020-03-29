import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneOutlined from "@material-ui/icons/PhoneOutlined";
import EmailOutlined from "@material-ui/icons/EmailOutlined";

const ContactItem = ({ contact: { name, id, email, phone, type } }) => {
  return (
    <Card style={{ margin: 8, background: "#90a4ae" }}>
      <CardContent>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          margin='4'
        >
          <Box flexGrow={1}>
            <Typography variant='h5'>{name}</Typography>
          </Box>
          <Chip label={type.toUpperCase()}></Chip>
        </Box>
        <List
          component='nav'
          aria-label='main mailbox folders'
          style={{ color: "#212121" }}
        >
          {email && (
            <ListItem>
              <ListItemIcon>
                <EmailOutlined />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
          )}
          {phone && (
            <ListItem>
              <ListItemIcon>
                <PhoneOutlined />
              </ListItemIcon>
              <ListItemText primary={phone} />
            </ListItem>
          )}
        </List>
      </CardContent>
      <Button style={{ background: "#5c6bc0", width: "50%" }}>Edit</Button>
      <Button style={{ background: "#DC143C", width: "50%" }}>Delete</Button>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
