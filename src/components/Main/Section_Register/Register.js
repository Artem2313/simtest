/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { titleRUS, nameRUS, emailRUS, phoneRUS, textRUS } from './RUS.json';
import { titleENG, nameENG, emailENG, phoneENG, textENG } from './ENG.json';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      nameError: '',
      email: '',
      emailError: '',
      phone: '',
      phoneError: '',
      photo: null,
      photoError: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOptionChange = e => {
    this.setState({ position_id: Number(e.target.value) });
  };

  handlePhotoChange = e => {
    this.setState({ photo: e.target.files[0] });
  };

  validate = () => {
    let isError = false;
    const { name, email, phone, photo } = this.state;
    const { language } = this.props;

    const errors = {
      nameError: '',
      emailError: '',
      phoneError: '',
      photoError: '',
    };

    if (name.length < 6) {
      isError = true;
      errors.nameError =
        language === 'en'
          ? 'Username needs to be atleast 6 characters long'
          : 'имя должно состоять минимум из 6 знаков';
    }

    if (email.indexOf('@') === -1) {
      isError = true;
      errors.emailError =
        language === 'en' ? 'Requires valid email' : 'Должен содержать @';
    }

    if (phone.length !== 13) {
      isError = true;
      errors.phoneError =
        language === 'en'
          ? 'Number must consists of 13 digits'
          : 'Должен содержать 13 цифр';
    }

    if (phone.slice(0, 4) !== '+380') {
      isError = true;
      errors.phoneError =
        language === 'en'
          ? 'Number must start with +380'
          : 'Номер должен начинаться с +380';
    }

    if (photo === null) {
      isError = true;
      errors.photoError = language === 'en' ? 'Needs a file' : 'Нужен файл';
    } else if (photo.size > 5242880) {
      isError = true;
      errors.phoneError =
        language === 'en'
          ? 'File should be less than 5 mb'
          : 'Файл должен быть не более 5 мб';
    }

    this.setState(prevState => ({
      ...prevState,
      ...errors,
    }));

    return isError;
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone, photo } = this.state;
    const { onRegister } = this.props;
    const data = {
      name,
      email,
      phone,
      photo,
    };

    const err = this.validate();

    if (!err) {
      onRegister(data);

      this.setState({
        name: '',
        nameError: '',
        email: '',
        emailError: '',
        phone: '',
        phoneError: '',
        photo: null,
        photoError: '',
      });
    }
  };

  render() {
    const {
      name,
      email,
      phone,
      photo,
      nameError,
      emailError,
      phoneError,
      photoError,
    } = this.state;

    const { language } = this.props;

    return (
      <section className="Register-section">
        <div className="Register-section__header">
          <h1>{language === 'en' ? titleENG : titleRUS}</h1>
        </div>
        <form onSubmit={this.handleSubmit} className="Register-section__form">
          <div className="Register-section__form-main">
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">
                {language === 'en' ? 'Name' : 'Имя'}
              </label>

              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder={language === 'en' ? 'your name' : 'Ваше имя'}
              />
              <div className="Register-section__after-input">
                {language === 'en' ? nameENG : nameRUS}
              </div>
              {nameError && <div className="error-message">{nameError}</div>}
            </div>
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">
                {language === 'en' ? emailENG : emailRUS}
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder={
                  language === 'en' ? 'Email' : 'Введите Вашу эл.почту'
                }
              />
              <div className="Register-section__after-input">
                {language === 'en'
                  ? 'Enter your email'
                  : 'Введите Вашу эл.почту'}
              </div>
              {emailError && <div className="error-message">{emailError}</div>}
            </div>
            <div className="Register-section__form-main-element">
              <label className="Register-section__form-main-label">
                {language === 'en' ? phoneENG : phoneRUS}
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                className="Register-section__form-main-input"
                placeholder="+380"
              />
              <div className="Register-section__after-input">
                {language === 'en'
                  ? 'Enter your phone number'
                  : 'Введите Ваш номер телефона'}
              </div>
              {phoneError && <div className="error-message">{phoneError}</div>}
            </div>
          </div>
          <div className="Register-section__photo-container">
            <label className="Register-section__photo-label">
              {language === 'en' ? textENG : textRUS}
            </label>
            <div className="Register-section__photo-input">
              <label htmlFor="file-upload" className="custom-file-upload">
                {photo ? (
                  photo.name
                ) : (
                  <span>
                    {language === 'en' ? 'Upload file' : 'Выборать файл'}
                  </span>
                )}
              </label>

              <label htmlFor="file-upload" className="custom-file-browse">
                {language === 'en' ? 'Upload' : 'Выбор'}
              </label>

              <input
                type="file"
                name="photo"
                id="file-upload"
                onChange={this.handlePhotoChange}
                className="Register-section__photo-input"
              />
            </div>
            {photoError && <div className="error-message">{photoError}</div>}
          </div>
          <button type="submit" className="button">
            {language === 'en' ? 'Send' : 'Отправить'}
          </button>
        </form>
      </section>
    );
  }
}

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
};
