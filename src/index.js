import React from 'react'
import * as ReactDOM from 'react-dom/client';
import App from './react/App.jsx'
import vanilla from './vanilla.png';
import './styles.css'

// add html
const img = document.createElement('img');
img.src = vanilla; 
img.style.display = "block"; 
img.style.margin = "auto"; 
document.getElementById('theme').appendChild(img);

const theme = document.getElementById('theme');
theme.style.display = "flex";
theme.style.justifyContent = "center";
theme.style.alignItems = "center";
theme.style.height = "60vh"; 

// react render
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App/>
);