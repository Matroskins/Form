
import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './containers/View/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}><App /></MuiThemeProvider>,
   document.getElementById('root'));
registerServiceWorker();
