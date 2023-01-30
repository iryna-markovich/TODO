import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Tasks } from './containers';
import { Title, Line } from './components';

const App = () => (
  <Container>
    <Title>It's a simple TODOList</Title>
    <Line />
    <BrowserRouter>
      <Routes>
        <Route exact path="/:filter?" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  </Container>
);

export default App;
