import React, { Component } from 'react';
import './App.css';

import { default as Bar } from './components/bar'
import { default as Pie } from './components/pie'
import { default as Line } from './components/line'

import bar_data from './data/bar_data'
import pie_data from './data/pie_data'
import line_data from './data/line_data'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{height: 25, background: '#bebebe'}}>
          <Bar data={bar_data} />
        </header>
        <header className="App-header" style={{height: 25}}>

          <Pie data={pie_data} />
        </header>  
        <header className="App-header" style={{height: 25}}>
          Line
          <Line data={line_data} />
        </header>        
      </div>
    );
  }
}

export default App;