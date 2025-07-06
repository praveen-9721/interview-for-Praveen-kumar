// Created a new React component for the SpaceX Dashboard
// This component fetches and displays SpaceX launches, allowing users to filter by upcoming or past

import React from 'react';
import Dashboard from './components/Pages/Dashboard';
// import Dashboard from './Dashboard'; // Adjust the path if Dashboard is in a subfolder

function App() {
  return (
    <div>
      <Dashboard/>
    </div>
  );
}

export default App;
