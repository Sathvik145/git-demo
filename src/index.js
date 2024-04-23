import React from 'react';
import ReactDOM from 'react-dom';
 // Import any global CSS or styling
import App from './App'; // Import your main App component
 // Optional: Used for performance monitoring

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: Uncomment the line below to measure performance with web vitals
// reportWebVitals();
