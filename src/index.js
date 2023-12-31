import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import App from './containers/App';
// import Notes from './Notes'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<App/>
  {/* <Notes/> */}
  </React.StrictMode>
);

