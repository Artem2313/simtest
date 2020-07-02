import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from '../../../assets/logo.svg';

const Toolbar = ({ drawerClickHandler, language }) => (
  <header className="toolbar container">
    <nav className="toolbar__navigation">
      <div className="toolbar__logo">
        <Link to="About me" spy smooth>
          <img src={logo} height="100%" alt="logo" />
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <Link to="About me" spy smooth>
              {language === 'en' ? 'Сloud migration' : 'Облачные сервисы'}
            </Link>
          </li>
          <li>
            <Link to="Requirements" spy smooth>
              {language === 'en' ? 'Introduction' : 'Знакомство'}
            </Link>
          </li>
          <li>
            <Link to="Users" spy smooth>
              {language === 'en' ? 'Benefits' : 'Преимущества'}
            </Link>
          </li>
          <li>
            <Link to="Sign up" spy smooth>
              {language === 'en' ? 'Contact us' : 'Связаться с нами'}
            </Link>
          </li>
        </ul>
      </div>
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
    </nav>
  </header>
);

export default Toolbar;

Toolbar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
};
