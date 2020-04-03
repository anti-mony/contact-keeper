import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import aboutimg from "../../Static/about.jpg";

const About = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      margin='16px'
      flexDirection='column'
    >
      <Typography variant='h2'>About</Typography>
      <Typography variant='h5' gutterBottom>
        Contact Keeper
      </Typography>
      <Typography variant='body1'>Manage Contacts the Hard Way xD</Typography>
      <Typography variant='subtitle2'>(But I hope the dog helps)</Typography>
      <img
        src={aboutimg}
        alt='Cute Dog'
        height='400'
        width='auto'
        style={{ borderRadius: 16, margin: 16 }}
      />
      <Typography variant='body2'>
        Photo by{" "}
        <Button
          variant='outlined'
          size='small'
          href='https://www.pexels.com/@lstan?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'
        >
          Laura Stanley
        </Button>{" "}
        from{" "}
        <Button
          variant='outlined'
          size='small'
          href='https://www.pexels.com/photo/shallow-focus-photo-of-long-coated-dog-3361722/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'
        >
          Pexels
        </Button>
      </Typography>
    </Box>
  );
};

export default About;
