import React from 'react';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import MainHeader from './components/MainHeader';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <NavMenu />
        <div style={{ width: '100%' }}>
          <MainHeader />
          <MainContent />
        </div>
      </div>

      <GlobalStyle />
    </>
  );
};

export default App;
