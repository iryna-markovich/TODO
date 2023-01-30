import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tasks from './Tasks.jsx';

const App = () => (
  <div className="container">
    <h1 className="container__title">It's a simple TODOList</h1>
    <hr className="container__line" />
    <BrowserRouter>
      <Routes>
        <Route exact path="/:filter?" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
