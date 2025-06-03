import React from 'react';
import './Documentation.css';
import { Link } from 'react-router-dom';

const Documentation = () => {
  return (
    <div className='mainlayout'>
      <Link to="/" className='goback-button'>
        <span className='arrow'>&larr;</span> Go back
      </Link>
      <h1>Graph Plotter User Guide and Documentation</h1>
      <h2>Introduction</h2>
      <p>
        Welcome to the Graph Plotter! This website allows you to plot 2D and 3D graphs based on mathematical equations. Whether you're a math enthusiast or simply curious about visualizing equations, this tool is designed to make graph plotting easy and intuitive.
      </p>

      <h2>Supported Equations</h2>
      <p>
        The Graph Plotter supports a wide range of mathematical equations. You can plot both 2D and 3D graphs based on various functions. Here are a few examples of supported equation formats:
      </p>
      <ul>
        <li>2D Equation: y = f(x)</li>
        <li>3D Equation: z = f(x, y)</li>
      </ul>
      <p>
        You can use standard mathematical operators (+, -, *, /, ^) and functions (sin, cos, tan, log, sqrt, etc.) in your equations. Feel free to experiment with different equations and explore the visual representations of mathematical functions.
      </p>

      <h2>Plotting a Graph</h2>
      <p>
        To plot a graph, follow these steps:
      </p>
      <ol>
        <li>Choose the graph type (2D or 3D) using the toggle switch.</li>
        <li>Enter your equation in the corresponding input field. Make sure the equation is in a valid format.</li>
        <li>Click the "Plot Graph" button to visualize the equation.</li>
      </ol>

      <h2>Interacting with the Graph</h2>
      <p>
        Once the graph is plotted, you can interact with it in the following ways:
      </p>
      <ul>
        <li>Zoom In/Out: Use the mouse scroll wheel to zoom in and out of the graph.</li>
        <li>Pan: Click and drag the graph to move it within the plot area.</li>
        <li>Snapshot: To take a snapshot of the graph, right-click on the graph and select "Save Image As" to save it to your device.</li>
      </ul>

      <h2>Customization</h2>
      <p>
        The Graph Plotter allows you to customize certain aspects of the graph. Here are the available options based on the graph type:
      </p>
      <ul>
        <li>2D Graph:
          <ul>
            <li>Color: Select a color for the graph line from the color dropdown menu.</li>
          </ul>
        </li>
        <li>3D Graph:
          <ul>
            <li>Color: The 3D graph does not support color customization because it already comes in a variety of colors for representing depth and variety in the plot highs and lows.</li>
          </ul>
        </li>
      </ul>
      <p>
        Choose your preferred options before plotting the graph to see the desired customization.
      </p>

      <h2>What Makes Us Stand Out from Others</h2>
      <p>
        Here are some key features that make the Graph Plotter stand out from other software like Desmos and Symbolab:
      </p>
      <ul>
        <li>Easy to Use: The Graph Plotter offers a user-friendly interface, making it simple and intuitive to plot graphs.</li>
        <li>Real-time Visualization: The graphs are generated in real-time, allowing you to see the changes instantly as you modify the equations.</li>
        <li>Support for 3D Graphs: Unlike some other software, the Graph Plotter supports plotting 3D graphs, providing a more comprehensive visualization of mathematical equations.</li>
        <li>Customization Options: You can customize the color of 2D graphs, providing flexibility in visual representation.</li>
        <li>Snapshot Functionality: The Graph Plotter allows you to take snapshots of the graphs directly from the interface, making it convenient for saving and sharing your visualizations.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        The Graph Plotter is a powerful tool for visualizing mathematical equations. Use it to explore the world of mathematics and gain insights into the behavior of various functions. Enjoy plotting!
      </p>
    </div>
  );
};

export default Documentation;
