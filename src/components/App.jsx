import React from 'react'
import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';
import Main from './Main';
import Preview from './Preview';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: 'flex'}}>
        <SideMenu />
        <Main />
        <Preview />
      </div>
      <Footer />
  </div>
  )
}

export default App;
