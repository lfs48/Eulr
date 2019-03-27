import React from 'react';
import ReactDOM from 'react-dom';



const cb = () => {
    
    const root = document.getElementById("root");

    ReactDOM.render(<h1>testing</h1>, root);
};

document.addEventListener("DOMContentLoaded", cb);