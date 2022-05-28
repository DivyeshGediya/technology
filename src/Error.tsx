import React, { useState } from 'react';
import './LoginPOP.css'
const Error = (props:{false:()=>void,error:string}) => {
    const [close, setClose] = useState<boolean>(false);
    const closePOP = () => {
      setClose(true);
      props.false()
    };
  return (
    <>
      {!close && (
        <>
          <div className="pop_back_error" onClick={closePOP}></div>
          <div className="pop_font_error">
            <div className="pop">
                {props.error}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Error;
