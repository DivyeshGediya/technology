import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { TextValidator } from 'react-material-ui-form-validator';
import './LoginPOP.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ClearIcon from '@mui/icons-material/Clear';
import Error from './Error';
import { Link } from 'react-router-dom';
import { URL } from './URL';
type Props = {
  reload: () => void;
};
const LoginPOP = (props: Props) => {
  const [close, setClose] = useState<boolean>(true);
  const [state, setState] = useState({
    data: [],
    logindata: false,
  });
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const getLoginData = () => {
    fetch(URL + 'get_signup_data.php')
      .then((res) => res.json())
      .then((data) => {
        setState({ ...state, data: data });
      });
      const value = localStorage.getItem("login_data")
      if (typeof value === 'string') {
          const parse = JSON.parse(value) 
          return;
      }
       setTimeout(() => {
        setClose(false);
      }, 3000);
  };
  useEffect(() => {
    getLoginData();
  }, []);
  useEffect(() => {}, []);
  const closePOP = () => {
    setClose(true);
  };
  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    text: string
  ) => {
    setForm({ ...form, [text]: e.target.value });
  };
  const submitData = (e: React.FormEvent<Element>) => {
    let login_data = state.data.filter(
      (v: { email: string; password: string }) =>
        v.email === form.email && v.password === form.password
    );
    if (!login_data[0]) {
      e.preventDefault();
      setState({ ...state, logindata: true });
      return;
    }
    localStorage.setItem('login_data', JSON.stringify(form));
    closePOP();
    props.reload();
  };
  return (
    <>
      {!close && (
        <>
          {state.logindata && (
            <Error
              error="Data Not Found"
              false={() => {
                setState({ ...state, logindata: false });
              }}
            />
          )}
          <div className="pop_back" onClick={closePOP}></div>
          <div className="pop_font">
            <div className="pop">
              <h2>Sign In</h2>
              <ValidatorForm className="form" onSubmit={submitData}>
                <TextValidator
                  value={form.email}
                  InputProps={{ type: 'email' }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeValue(e, 'email')
                  }
                  variant="standard"
                  label="Enter email"
                  placeholder="abc@gmail.com"
                  validators={['required']}
                  errorMessages={['Enter Email']}
                  fullWidth
                  style={{ margin: '20px 0' }}
                  name="email"
                />
                <TextValidator
                  value={form.password}
                  InputProps={{ type: 'password' }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    onChangeValue(e, 'password')
                  }
                  variant="standard"
                  label="Enter Password Name"
                  placeholder="abc@123"
                  validators={['required']}
                  errorMessages={['Enter Password']}
                  fullWidth
                  style={{ margin: '20px 0' }}
                  name="password"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ margin: '20px 0', width: '100%' }}
                  // onClick={handleSubmitForm}
                >
                  Sign in
                </Button>
              </ValidatorForm>
              <small>
                I have no account? <Link to="/login">Create Account</Link>
              </small>
              <div className="icon mt-3">
                <InstagramIcon sx={{ fontSize: '30px', margin: '1% 2%' }} />
                <FacebookIcon sx={{ fontSize: '30px', margin: '1% 2%' }} />
                <GoogleIcon sx={{ fontSize: '30px', margin: '1% 2%' }} />
              </div>
              <ClearIcon className="clear" onClick={closePOP} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginPOP;
