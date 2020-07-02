import React from 'react';
import { Link } from 'react-scroll';
import { titleENG, textENG, buttonENG } from './ENG.json';
import { titleRUS, textRUS, buttonRUS } from './RUS.json';
import './AboutMe.scss';

const AboutMe = ({ language }) => (
  <section className="aboutme">
    <div className="aboutme__container">
      <h1>{language === 'en' ? titleENG : titleRUS}</h1>
      <p className="desktop">{language === 'en' ? textENG : textRUS}</p>
      <p className="mobile">{language === 'en' ? textENG : textRUS}</p>
      <Link to="Sign up" spy smooth className="aboutme__button">
        <button type="button" className="button">
          {language === 'en' ? buttonENG : buttonRUS}
        </button>
      </Link>
    </div>
  </section>
);

export default AboutMe;
