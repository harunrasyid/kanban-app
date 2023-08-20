import "./App.css";
import { Column } from "./components/Column/Column.tsx";
import { State } from "./types/Types.ts";

function App() {
  return (
    <div className="App">
      <Column state={State.Todo} />
      <Column state={State.Doing} />
      <Column state={State.Done} />
    </div>
  );
}

export default App;
