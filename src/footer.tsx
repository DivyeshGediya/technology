import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';

const Footer = () => {
  const [state, setState] = useState<{email:string}>({
    email: '',
  });
  return (
    <footer data-aos="fade-up" className="footer">
      <img src="gallery/footer_robot.png" alt="" />
      <div className="subscribe">
        <h1>Join to Technology</h1>
        <p>
          Enter your email address to register to our newsletter joined
          form delivered on regular basis!
        </p>
        <ValidatorForm className="subscribe_form" onSubmit={() => ''}>
          <TextField
            value={state.email}
            type="email"
            InputLabelProps={{ className: 'color' }}
            InputProps={{ className: 'color' }}
            onChange={(e) => setState({ email: e.target.value })}
            variant="standard"
            label="Enter Email Address"
            placeholder="abc12@gmail.com"
            // validators={['required']}
            // errorMessages={['enter email address']}

            required
            style={{ margin: '20px', width: '300px' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: '20px' }}
          >
            Join Our Team
          </Button>
        </ValidatorForm>
        <div>
          <InstagramIcon sx={{fontSize:'40px',margin:'1%'}} />
          <FacebookIcon sx={{fontSize:'40px',margin:'1%'}} />
          <GoogleIcon sx={{fontSize:'40px',margin:'1%'}} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
