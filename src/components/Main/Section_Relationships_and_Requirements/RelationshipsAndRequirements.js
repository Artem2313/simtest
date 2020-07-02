import React from 'react';
import { Link } from 'react-scroll';
import { ReactComponent as Man } from '../../../assets/man-laptop-v1.svg';

import {
  mainTitleENG,
  titleENG,
  paragraph1ENG,
  paragraph2ENG,
  buttonENG,
} from './ENG.json';
import {
  mainTitleRUS,
  titleRUS,
  paragraph1RUS,
  paragraph2RUS,
  buttonRUS,
} from './RUS.json';

const RelationshipsAndRequirements = ({ language }) => (
  <section className="Relationship">
    <div className="Relationship__container">
      <h1>{language === 'en' ? mainTitleENG : mainTitleRUS}</h1>
      <div className="Relationship__inner-container">
        <Man className="Relationship__svg" />
        <div className="Relationship__spacer" />
        <div className="Relationship__text-container">
          <h2>{language === 'en' ? titleENG : titleRUS}</h2>
          <p>{language === 'en' ? paragraph1ENG : paragraph1RUS}</p>
          <p>{language === 'en' ? paragraph2ENG : paragraph2RUS}</p>
          <button type="button" className="button">
            <Link to="Sign up" spy smooth>
              {language === 'en' ? buttonENG : buttonRUS}
            </Link>
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default RelationshipsAndRequirements;
