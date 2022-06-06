import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { URL } from './URL';

const Footer = () => {
  const [state, setState] = useState<{email:string}>({
    email: '',
  });
  const handleSubmit = () =>{
    fetch( URL + 'detailsReq.php' , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `email=${state.email}`,
    }).then(()=>setState({...state,email:''}));
    
  }
  return (
    <footer data-aos="fade-up" className="footer">
      <img src="gallery/footer_robot.png" alt="" />
      <div className="subscribe">
        <h1>Send your email to Technology</h1>
        <p>
          for get more details
        </p>
        <ValidatorForm className="subscribe_form" onSubmit={handleSubmit}>
          <TextValidator
            value={state.email}
            type="email"
            InputLabelProps={{ className: 'color' }}
            InputProps={{ className: 'color' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState({ email: e.target.value })}
            variant="standard"
            label="Enter Email Address"
            placeholder="abc12@gmail.com"
            validators={['required']}
            errorMessages={['enter email address']}
            style={{ margin: '20px', width: '300px' }}
            name="email"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ margin: '20px' }}
          >
            Send
          </Button>
        </ValidatorForm>
        <div>
          <a href="https://www.instagram.com/" target="_blank"><InstagramIcon sx={{fontSize:'40px',margin:'1%'}} /></a>
          <a href="https://www.facebook.com/" target="_blank"><FacebookIcon sx={{fontSize:'40px',margin:'1%'}} /></a>
          <a href="https://myaccount.google.com/" target="_blank"><GoogleIcon sx={{fontSize:'40px',margin:'1%'}} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
