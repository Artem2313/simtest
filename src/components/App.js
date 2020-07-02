import React, { Component, lazy, Suspense } from 'react';

const LazyHeader = lazy(() =>
  import('./Header/Header' /* webpackChunkName: "Header" */),
);

const LazyMain = lazy(() =>
  import('./Main/Main' /* webpackChunkName: "Main" */),
);

const LazyFooter = lazy(() =>
  import('./Footer/Footer' /* webpackChunkName: "Footer" */),
);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
    };
  }

  handleLanguage = () => {
    this.setState(prevState => ({
      language: prevState.language === 'en' ? 'ru' : 'en',
    }));
  };

  render() {
    const { language } = this.state;
    return (
      <div className="wrapper">
        <Suspense fallback={<h1>...Loading</h1>}>
          <LazyHeader language={language} />
          <LazyMain language={language} handleLanguage={this.handleLanguage} />
          <LazyFooter language={language} />
        </Suspense>
      </div>
    );
  }
}
