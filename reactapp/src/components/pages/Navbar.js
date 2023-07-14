import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const [visible, setVisibility] = useState(false);
  
  const handleSign= () => {
    setVisibility(current => !current);
  };

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            ASSURE
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/policy_type'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Policies
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Renew Policy
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Claim
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/profile'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>              
            </li>
          </ul>
          {button &&
            <Link to='/login' style={{textDecoration: 'none'}}><button className='sign-up-button'>SIGN IN</button></Link>
          }          
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// <div>
//   <button onClick={handleSign}>SignUp</button>
//   {visible && <p className='sample'>This text is visible</p>}
// </div> 

{/* {visible && <SignUp/>} */}
{/* {visible ? <SignUp/> : null} */}

// {button &&
//   <Link to='/login' style={{textDecoration: 'none'}}><button className='sign-up-button'>SIGN IN</button></Link>
// }