import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import russians from './russians.json';
import englishmen from './englishmen.json';

const Users = ({ language }) => (
  <section className="users-section">
    <div className="users-section__container">
      <div className="users-section__header">
        <h1>
          {language === 'en'
            ? 'Find more about our services'
            : 'Аренда облака для бизнеса – преимущества работы с нами! '}
        </h1>
        <p>
          {language === 'en'
            ? 'Benefits of using our cloud migration services! '
            : 'Внимание! Мы используем только самые надежные и современные технологии при предоставлении наших услуг.'}
        </p>
      </div>
      <ul className="users-section__list">
        {language === 'en' &&
          englishmen.map(englishman => (
            <li className="users-section__profile-card" key={englishman.id}>
              <div className="users-section__user-container">
                <img
                  className="users-section__user-image"
                  src={englishman.src}
                  alt={englishman.data}
                  data-tip={englishman.data}
                />
                <h2
                  className="users-section__user-name"
                  data-tip={englishman.data}
                >
                  {englishman.data}
                </h2>
              </div>
              <ReactTooltip place="bottom" />
            </li>
          ))}
        {language !== 'en' &&
          russians.map(russian => (
            <li className="users-section__profile-card" key={russian.id}>
              <div className="users-section__user-container">
                <img
                  className="users-section__user-image"
                  src={russian.src}
                  alt={russian.data}
                  data-tip={russian.data}
                />
                <h2
                  className="users-section__user-name"
                  data-tip={russian.data}
                >
                  {russian.data}
                </h2>
              </div>
              <ReactTooltip place="bottom" />
            </li>
          ))}
      </ul>
    </div>
  </section>
);

export default Users;
