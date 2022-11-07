import './assets/scss/index.scss';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Movies from "./components/pages/movies";
import About from "./components/pages/about";
import Layout from "./components/layout/main";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Movies />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
