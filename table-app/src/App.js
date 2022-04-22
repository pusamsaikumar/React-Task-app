import React from 'react';
import './App.css';
import TableA from './components/TableA';
import TableC from './components/TableC';

function App() {
  return (
    <div className='container'>
      <div className='table1'>
      <TableA />
      </div >
      <div className='table2'><TableC /></div>

    </div>
  );
}

export default App;
