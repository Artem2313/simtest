import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const SideDrawer = ({ show, language }) => {
  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <div>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>
              <Link to="About me" spy smooth>
                {language === 'en' ? 'Сloud migration' : 'Облачные сервисы'}
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Requirements" spy smooth>
                {language === 'en' ? 'Introduction' : 'Знакомство'}
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Users" spy smooth>
                {language === 'en' ? 'Benefits' : 'Преимущества'}
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                {language === 'en' ? 'Contact us' : 'Связаться с нами'}
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
};
