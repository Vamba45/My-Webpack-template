import React from 'react';
import ReactDOM from 'react-dom/client';


import Heading from './components/Heading.jsx'; 
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Route, Routes, Link }from 'react-router-dom';

import './styles/style.scss';

const rootNode = document.getElementById("app");    // элемент для рендеринга приложения React
// получаем корневой элемент 
const root = ReactDOM.createRoot(rootNode);
// рендеринг в корневой элемент
root.render(
    <Router>
        <Routes>
            <Route path='/' element={
                <Heading/>
            } />
            <Route path='/footer' element={<Footer/>}/>
        </Routes>
    </Router>
);