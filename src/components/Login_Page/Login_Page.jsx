import React, { memo, useRef } from 'react';
import './Login_Page.css';
import { Admin, User_Admin } from '../../images/images';
import Login_Form from '../Login_Form/Login_Form';

function Login_Page({ setActiveAdmin }) {
  const eyes1Ref = useRef(null);
  const eyes2Ref = useRef(null);

  const getCursorPosition = (event) => {
    const x = (event.clientX * 100) / window.innerWidth + '%';
    const y = (event.clientY * 100) / window.innerHeight + '%';

    if (eyes1Ref.current) {
      eyes1Ref.current.style.left = x;
      eyes1Ref.current.style.top = y;
      eyes1Ref.current.style.transform = `translate(-${x}, -${y})`;
    }

    if (eyes2Ref.current) {
      eyes2Ref.current.style.left = x;
      eyes2Ref.current.style.top = y;
      eyes2Ref.current.style.transform = `translate(-${x}, -${y})`;
    }
  };

  return (
    <div className='login_page' onMouseMove={getCursorPosition}>
      <div className='container'>
        <div className='login_page_Content'>
          <div className="face">
            <img src={Admin} alt="Admin Face" />
            <div className="eye-cover1">
              <div className="eyes1" ref={eyes1Ref}></div>
            </div>
            <div className="eye-cover2">
              <div className="eyes2" ref={eyes2Ref}></div>
            </div>
          </div>
          <div className="login-container">
            <img src={User_Admin} alt="User Admin" />
            <h1>Go to Admin Panel</h1>
            <Login_Form setActiveAdmin={setActiveAdmin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Login_Page);
