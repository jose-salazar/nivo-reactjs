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

                                <div class="wrapper">
                                        <Bar data={bar_data} />
                                        <Pie data={pie_data} />
                                        <Bar data={bar_data} />
                                        <Pie data={pie_data} />
                                        <Line data={line_data} />
                                        <Bar data={bar_data} />
                                </div>
                        </div>


                );
        }
}

export default App;