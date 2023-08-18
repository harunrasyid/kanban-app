import "./App.css";
import { Column } from "./components/Column/Column.tsx";

function App() {
  return (
    <div className="App">
      <Column title={"TO DO"} />
      <Column title={"DOING"} />
      <Column title={"DONE"} />
    </div>
  );
}

export default App;
