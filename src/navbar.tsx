import React, { useEffect, useRef, useState } from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import LoginPOP from './LoginPOP';
import { URL } from './URL';
interface NavProps {
  color: string;
  logo: boolean;
  back?: string;
}
const Navbar = (props: NavProps) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState({
    nav: '',
    email: '',
  });
  const getLoginData = () => {
    const value = localStorage.getItem("login_data")
    if (typeof value === 'string') {
        const parse = JSON.parse(value) 
        setState({ ...state, email: parse.email });
        return;
    }
    setState({ ...state, email: '' });
  };
  useEffect(() => {
    getLoginData();
  }, []);
  const show = () => {
    if (ref.current) {
      let ul = ref.current.children;
      setTimeout(() => {
        for (let i in ul) {
          setTimeout(() => {
            ul[i].classList.add('show');
          }, 500 * +i);
        }
      }, 1000);
    }
  };
  const hide = () => {
    if (ref.current) {
      let ul = ref.current.children;
      for (let i = ul.length - 1; i >= 0; i--) {
        setTimeout(() => {
          ul[i].classList.remove('show');
        }, 2500 / (i + 1));
      }
    }
  };
  const open = () => {
    setState({ ...state, nav: 'nav' });
    setTimeout(() => {
      setState({
        ...state,
        nav: 'nav fullheight',
      });
      show();
    }, 1000);
  };
  const close = () => {
    hide();
    setTimeout(() => {
      setState({ ...state, nav: 'nav' });
      setTimeout(() => {
        setState({
          ...state,
          nav: '',
        });
      }, 1000);
    }, 2000);
  };
  const logOut = () => {
    localStorage.clear();
    navigate('/')
    getLoginData();
    // fetch(URL + 'logout.php').then(() => getLoginData());
  };
  return (
    <>
      <LoginPOP reload={getLoginData} />
      <div
        className="navbar"
        style={{ background: `${props.back || 'none'}` }}
        data-aos="fade-down"
      >
        <div className="menu">
          <Link to="/">
            <h1 className="title" style={{ color: props.color }}>
              <img src={`gallery/logo${props.logo ? '2' : ''}.png`} alt="" />{' '}
              Technology
            </h1>
          </Link>
          {!state.nav && (
            <div
              className="open"
              style={{ color: props.color, fontSize: '20px', marginTop: '5vh' }}
            >
              {state.email && (
                <Button
                  color="primary"
                  variant="contained"
                  className="username"
                  onClick={logOut}
                >
                  {state.email && 'Sing Out'}
                </Button>
              )}
              <MenuIcon sx={{ fontSize: '45px' }} onClick={open} />
            </div>
          )}
          <nav className={state.nav}>
            <div ref={ref} className="list">
              <Link
                to="/"
                className="title"
                style={{ color: 'black', fontSize: '50px' }}
              >
                <img src="gallery/logo2.png" width="100px" alt="" />{' '}
                <strong>Technology</strong>
              </Link>
              <Link to="/">Home</Link>
              <Link to="/mo-co">Mobile And Computer</Link>
              <Link to="/internet">Internet</Link>
              <Link to="/ai">Artificial Intelligence</Link>
              <Link to="/about">About Us</Link>
              {state.email === '' ? <Link to="/login">Log in</Link> : ''}
              <CloseIcon
                sx={{ color: 'balck', fontSize: '45px' }}
                className="close"
                onClick={close}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
