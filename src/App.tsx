import "./App.css";
import { Barchart } from "@components/Barchart";
import { Donutchart } from "@components/Donutchart";
import { Areachart } from "@components/Areachart";

function App() {
  return (
    <div className="App">
      <div className="chart-container">
        <p>Bar chart</p>
        <Barchart />
      </div>
      <div className="chart-container">
        <p>Donut chart</p>
        <Donutchart />
      </div>
      <div className="chart-container">
        <p>Area chart</p>
        <Areachart />
      </div>
    </div>
  );
}

export default App;
