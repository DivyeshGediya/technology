import React, { useState } from 'react';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
const Backtop = () => {
  const [state, setState] = useState<boolean>(true);
  function scrollFunction() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 0
    ) {
      setState(false);
    } else {
      setState(true);
    }
  }
  window.addEventListener('scroll', scrollFunction);
  return (
    <a
      href="#"
      className={`back-to-top ${
        state && 'back_top'
      }`}
      id="back_top"
    >
      <ArrowUpwardTwoToneIcon />
    </a>
  );
};

export default Backtop;
