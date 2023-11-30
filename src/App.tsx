import React from 'react';
import './App.css';
import { FormContainer } from './pages/Registration';
import { FormContainerType } from './pages/Registration/Types';
function App() {
  return (
    <div className="App">
      <FormContainer type={FormContainerType.SignIn}/>
    </div>
  );
}

export default App;
