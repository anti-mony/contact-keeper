import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Contacts from "@material-ui/icons/Contacts";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

import ContactFilter from "../Contacts/ContactFilter";

const Navbar = ({ title }) => {
  return (
    <AppBar
      position='sticky'
      style={{ background: "#e0e0e0", color: "#212121" }}
    >
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={6} sm={4}>
            <Grid container direction='row' alignItems='center'>
              <Contacts />
              <Typography variant='h6' style={{ margin: 4 }}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Hidden xsDown>
            {" "}
            <Grid item sm={4}>
              {" "}
              <ContactFilter />
            </Grid>
          </Hidden>
          <Grid item xs={6} sm={4}>
            <Box display='flex' flexDirection='row-reverse'>
              <Link to='/about'>
                <Button>About</Button>
              </Link>
              <Link to='/'>
                <Button>Home</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Hidden smUp>
        <Toolbar>
          <Box width={1}>
            <ContactFilter />
          </Box>
        </Toolbar>
      </Hidden>
    </AppBar>
  );
};

Navbar.defaultProps = {
  title: "Contact Keeper"
};

export default Navbar;
