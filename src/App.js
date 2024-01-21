import './App.css';
import { Form } from '../src/components/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Vid } from '../src/components/Vid';

function App() {

  return (
<Router>
        <Routes>
          <Route exact path="/" Component={Form}/>
          <Route exact path="/vid" Component={Vid}/>
        </Routes>
</Router>
  );
}
 
export default App;
