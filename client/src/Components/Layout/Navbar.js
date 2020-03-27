import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Contacts from "@material-ui/icons/Contacts";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navbar = ({ title }) => {
  return (
    <AppBar
      position='sticky'
      style={{ background: "#e0e0e0", color: "#212121" }}
    >
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={8} sm={8}>
            <Grid container direction='row' alignItems='center' link=''>
              <Contacts />
              <Typography variant='h6' style={{ margin: 4 }}>
                {title}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} sm={4}>
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
    </AppBar>
  );
};

Navbar.defaultProps = {
  title: "Contact Keeper"
};

export default Navbar;
