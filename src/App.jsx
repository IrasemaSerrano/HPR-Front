import './App.css';
import React, { useState } from 'react'
import { ReactSession } from 'react-client-session';
import Layout from './layouts/Layout';
import OptionLogin from './layouts/header/OptionLogin';
import OptionUser from './layouts/header/OptionUser';

function App() {

  const [token, setToken] = useState(ReactSession.get("token"));
  ReactSession.setStoreType("localStorage");

  return (
    <>
    <Layout>
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    </Layout>
    {token?(<OptionUser setToken={setToken}/>):(<OptionLogin setToken={setToken}/>)}
    
    </>
  );
}

export default App;