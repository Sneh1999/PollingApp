import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";

import Routes from './routes';

import './index.css';

ReactDOM.render(
  <Routes history={createBrowserHistory()} />,
  document.getElementById("root")
);