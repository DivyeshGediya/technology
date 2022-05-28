import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Button, TextField } from '@mui/material';
import Loading from './Loading';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Error from './Error';
import { URL } from './URL';

// const signinUrl = URL+'get_login_data.php';
// const signupUrl = URL+'get_signup_data.php';
const Login = () => {
  const navigation = useNavigate();
  const signinFormUrl = URL+'login.php';
  const signupFormUrl = URL+'sign_up_data.php';
  const [state, setState] = useState<{
    in_up: boolean;
    error: boolean;
    logindata: boolean;
    singup_data: { email: string; password: string }[];
  }>({
    in_up: false,
    error: false,
    logindata: false,
    singup_data: [],
  });
  const [form, setform] = useState<{
    fname: string;
    lname: string;
    userName: string;
    password: string;
    confirm: string;
    email: string;
  }>({
    fname: '',
    lname: '',
    userName: '',
    password: '',
    confirm: '',
    email: '',
  });
  const [loader, setLoader] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2000);
  }, []);
  const getLoginData = () => {
    fetch(URL+'get_signup_data.php')
      .then((res) => res.json())
      .then((data) => setState({ ...state, singup_data: data }));
  };
  useMemo(() => {
    getLoginData();
  }, [state.in_up]);
  const handleSubmitForm = (e: React.FormEvent<Element>) => {
    if (state.in_up) {
      let data = state.singup_data.filter(
        (v: { email: string; password: string }) =>
          v.email === form.email && v.password === form.password
      );
      if (!data[0]) {
        e.preventDefault();
        setState({ ...state, logindata: true });
      } else {
        let formBody = `email=${form.email}&password=${form.password}`;
        fetch(signinFormUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody,
        });
        navigation('/');
      }
    } else {
      if (form.password !== form.confirm && !state.in_up) {
        e.preventDefault();
        setState({ ...state, error: true });
      } else {
        let formBody = `f_name=${form.fname}&l_name=${form.lname}&user_name=${form.userName}&email=${form.email}&password=${form.password}`;
        fetch(signupFormUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formBody,
        });
        navigation('/');
      }
    }
  };
  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    text: string
  ) => {
    setform({ ...form, [text]: e.target.value });
  };
  return (
    <>
      {loader ? (
        <>
          {state.error && (
            <Error
              error="Password is not mach"
              false={() => {
                setState({ ...state, error: false });
              }}
            />
          )}
          {state.logindata && (
            <Error
              error="Data Not Found"
              false={() => {
                setState({ ...state, logindata: false });
              }}
            />
          )}
          {/* <img src="gallery/Digital_technology.jpg" className="login" alt="" /> */}
          <div className="login"></div>
          <div className="login-page">
            <div className="w-100">
              <ValidatorForm
                className="form"
                onSubmit={(e) => handleSubmitForm(e)}
              >
                <h1>SIGN {state.in_up ? 'IN' : 'UP'}</h1>
                {state.in_up ? (
                  <>
                    <TextField
                      value={form.email}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color', type: 'email' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'email')
                      }
                      variant="standard"
                      label="Enter email"
                      placeholder="abc@gmail.com"
                      required
                      fullWidth
                      style={{ margin: '20px' }}
                      name="email"
                    />
                    <TextField
                      value={form.password}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color', type: 'password' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'password')
                      }
                      variant="standard"
                      label="Enter Password Name"
                      placeholder="abc@123"
                      required
                      fullWidth
                      style={{ margin: '20px' }}
                      name="password"
                    />
                  </>
                ) : (
                  <>
                    <TextField
                      value={form.fname}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'fname')
                      }
                      variant="standard"
                      label="Enter Frist Name"
                      placeholder="username"
                      required
                      fullWidth
                      style={{ margin: '20px' }}
                      name="f_name"
                    />
                    <TextField
                      value={form.lname}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'lname')
                      }
                      variant="standard"
                      label="Enter Last Name"
                      placeholder="username"
                      required
                      fullWidth
                      style={{ margin: '20px' }}
                      name="l_name"
                    />
                    <TextField
                      value={form.userName}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'userName')
                      }
                      variant="standard"
                      label="Enter User Name"
                      placeholder="username"
                      required
                      fullWidth
                      style={{ margin: '20px' }}
                      name="user_name"
                    />
                    <TextField
                      value={form.email}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color', type: 'email' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'email')
                      }
                      variant="standard"
                      label="Enter email"
                      placeholder="abc@gmail.com"
                      required
                      fullWidth
                      style={{ margin: '20px' }}
                      name="email"
                    />
                    <TextField
                      value={form.password}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color', type: 'password' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'password')
                      }
                      variant="standard"
                      label="Enter Password Name"
                      placeholder="abc@123"
                      required
                      fullWidth
                      style={{ margin: '20px' }}
                      name="password"
                    />
                    <TextField
                      value={form.confirm}
                      InputLabelProps={{ className: 'color' }}
                      InputProps={{ className: 'color', type: 'password' }}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        onChangeValue(e, 'confirm')
                      }
                      variant="standard"
                      label="Re-Enter Password Name"
                      placeholder="abc@123"
                      fullWidth
                      required
                      style={{ margin: '20px' }}
                    />
                  </>
                )}
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ margin: '20px', width: '100%' }}
                >
                  {state.in_up ? 'Sign in' : 'Sign up'}
                </Button>
                <br />
                <small>
                  I have {state.in_up ? 'no' : 'already'} account?{' '}
                  <span
                    className="sign_change"
                    onClick={() => setState({ ...state, in_up: !state.in_up })}
                  >
                    {state.in_up ? 'Create Account' : 'To Login'}
                  </span>
                </small>
              </ValidatorForm>
              <div className="icon mt-3">
                <InstagramIcon sx={{ fontSize: '30px', margin: '1% 2%' }} />
                <FacebookIcon sx={{ fontSize: '30px', margin: '1% 2%' }} />
                <GoogleIcon sx={{ fontSize: '30px', margin: '1% 2%' }} />
              </div>
            </div>
          </div>
          <Link to="/" className="logo">
            <h1>
              <img src="gallery/logo.png" alt="" />
              Technology
            </h1>
          </Link>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Login;
