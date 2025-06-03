import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom';
import * as math from 'mathjs';
import './HomePage.css';

const HomePage = () => {
  const [equation2D, setEquation2D] = useState('');
  const [equation3D, setEquation3D] = useState('');
  const [xValues, setXValues] = useState([]);
  const [yValues, setYValues] = useState([]);
  const [zValues, setZValues] = useState([]);
  const [graphType, setGraphType] = useState('2D');
  const [titleText, setTitleText] = useState('Graph Plotter');
  const [color, setColor] = useState('black');

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleText((prevTitleText) =>
        prevTitleText === 'Graph Plotter' ? 'Graph Maker' : 'Graph Plotter'
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleEquation2DChange = (event) => {
    setEquation2D(event.target.value);
  };

  const handleEquation3DChange = (event) => {
    setEquation3D(event.target.value);
  };

  const handleGraphSubmit = (event) => {
    event.preventDefault();
    if (graphType === '2D') {
      // Plot the 2D graph based on the equation
      plot2DGraph();
    } else if (graphType === '3D') {
      // Plot the 3D graph based on the equation
      plot3DGraph();
    }
  };

  const plot2DGraph = () => {
    try {
      const compiledExpression = math.compile(equation2D);
      const x = Array.from({ length: 100 }, (_, i) => -10 + i * 0.2);
      const y = x.map((xValue) => compiledExpression.evaluate({ x: xValue }));

      setXValues(x);
      setYValues(y);
    } catch (error) {
      console.error('Error evaluating equation:', error);
      setXValues([]);
      setYValues([]);
    }
  };

  const plot3DGraph = () => {
    try {
      const compiledExpression = math.compile(equation3D);
      const x = Array.from({ length: 100 }, (_, i) => -10 + i * 0.2);
      const y = Array.from({ length: 100 }, (_, i) => -10 + i * 0.2);

      const z = [];
      for (let i = 0; i < x.length; i++) {
        const row = [];
        for (let j = 0; j < y.length; j++) {
          const xValue = x[i];
          const yValue = y[j];
          const zValue = compiledExpression.evaluate({ x: xValue, y: yValue });
          row.push(zValue);
        }
        z.push(row);
      }

      setXValues(x);
      setYValues(y);
      setZValues(z);
    } catch (error) {
      console.error('Error evaluating equation:', error);
      setXValues([]);
      setYValues([]);
      setZValues([]);
    }
  };

  const handleGraphTypeChange = (event) => {
    const newGraphType = event.target.checked ? '3D' : '2D';
    setGraphType(newGraphType);
  };

  return (
    <div className="container">
      <h1 className="Title">{titleText}</h1>
      <form className="form" onSubmit={handleGraphSubmit}>
        <label className="labelinput" htmlFor="equationInput">
          Enter an Equation:
        </label>
        {graphType === '2D' ? (
          <input
            className="inputlabel"
            type="text"
            id="equationInput"
            value={equation2D}
            onChange={handleEquation2DChange}
            placeholder="e.g., y = 2x + 1"
            required
          />
        ) : (
          <input
            className="inputlabel"
            type="text"
            id="equationInput"
            value={equation3D}
            onChange={handleEquation3DChange}
            placeholder="e.g., x^2 + y^2"
            required
          />
        )}
        <button type="submit">Plot Graph</button>
      </form>

      <div>
      <label className="toggle-label">
        <span className="toggle-text">{graphType === '3D' ? '3D' : '2D'}</span>
        <input
          className="toggle-input"
          type="checkbox"
          checked={graphType === '3D'}
          onChange={handleGraphTypeChange}
        />
        <span className="toggle-slider"></span>
      </label>

        {graphType === '2D' && (
          <select
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className="selector"
            style={{ backgroundColor: color }}
          >
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="green">Green</option>
          </select>
        )}
      </div>

      {graphType === '2D' ? (
        <Plot
          className="plot"
          data={[
            {
              x: xValues,
              y: yValues,
              type: 'scatter',
              mode: 'lines',
              marker: { color: color },
            },
          ]}
          layout={{ width: 800, height: 500, title: 'Graph for plot: ' + equation2D }}
        />
      ) : (
        <Plot
          className="plot"
          data={[
            {
              x: xValues,
              y: yValues,
              z: zValues,
              type: 'surface',
            },
          ]}
          layout={{
            title: '3D Graph for: '+equation3D,
            scene: {
              xaxis: { title: 'X' },
              yaxis: { title: 'Y' },
              zaxis: { title: 'Z' },
            },
            width: 800,
            height: 500,
          }}
        />
      )}
    <div className='view-docs'>
      <Link to='./documentation'>View Documentation</Link>
    </div>
    </div>
  );
};

export default HomePage;