import logo from './logo.svg';
import './App.css';
import * as echarts from 'echarts';

function App() {
  let myChart = echarts.init(document.getElementById('main'))
  myChart.setOption({
    title: {
      text: 'Heatmap example'
    },
    tooltip: {},
    xAxis: {
      type: 'heatmap'
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="main" style="width: 600px; height:400px;"></div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
