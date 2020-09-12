import React, {useContext} from 'react';

//Import components
import MainGrid from './components/MainGrid';
import {GlobalProvider, GlobalContext} from './context/Context';
import Footer from './components/Footer';


function App() {
  return (
    <GlobalProvider>
      <div>
        <MainGrid />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
