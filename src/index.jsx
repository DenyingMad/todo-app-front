import React from 'react'
import ReactDOM from 'react-dom'
import "./styles/index.css"
import App from "./app/App"
import {BrowserRouter} from "react-router-dom"

const Root = (
  <BrowserRouter basename="/">
    <App/>
  </BrowserRouter>
);

ReactDOM.render(Root, document.getElementById('root'));
