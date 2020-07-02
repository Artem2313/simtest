import React, { Component, lazy, Suspense } from 'react';
import { Element } from 'react-scroll';
import RelationshipsAndRequirements from './Section_Relationships_and_Requirements/RelationshipsAndRequirements';

const LazyAboutMe = lazy(() =>
  import('./Section_About_Me/AboutMe' /* webpackChunkName: "AboutMe" */),
);

const LazyUsers = lazy(() =>
  import('./Section_Users/Users' /* webpackChunkName: "Users" */),
);

const LazyForm = lazy(() =>
  import('./Section_Register/Register' /* webpackChunkName: "Form" */),
);

const LazyModal = lazy(() =>
  import('../shared/Modal' /* webpackChunkName: "Modal" */),
);

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RegisterSuccess: false,
      data: null,
    };
  }

  handleRegister = data => {
    console.log(data);
    this.setState({ data, RegisterSuccess: true });
  };

  onHandleModal = () => {
    this.setState({ RegisterSuccess: false });
  };

  render() {
    const { RegisterSuccess, data } = this.state;
    const { language, handleLanguage } = this.props;
    return (
      <main style={{ marginTop: '60px' }}>
        <button type="button" className="button" onClick={handleLanguage}>
          {language}
        </button>
        <Suspense fallback={<h1>...Loading</h1>}>
          <Element name="About me">
            <LazyAboutMe language={language} />
          </Element>
          <Element name="Requirements">
            <RelationshipsAndRequirements language={language} />
          </Element>
          <Element name="Users">
            <LazyUsers language={language} />
          </Element>
          <Element name="Sign up">
            <LazyForm language={language} onRegister={this.handleRegister} />
          </Element>
          {RegisterSuccess && (
            <LazyModal
              onHandleModal={this.onHandleModal}
              data={data}
              language={language}
            />
          )}
        </Suspense>
      </main>
    );
  }
}
