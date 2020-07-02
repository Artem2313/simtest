import React from 'react';

const Footer = ({ language }) => (
  <footer>
    <p>
      {language === 'en'
        ? '© SIM company all rights reserved'
        : '© SIM company все права защищены'}
    </p>
  </footer>
);

export default Footer;
