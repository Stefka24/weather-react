import "./App.css";
import Search from "./Search";
import Temperature from "./Temperature";

export default function App() {
  return (
    <div className="App card framework">
      <div className="card-body">
        <Temperature />
        <Search />
      </div>
    </div>
  );
}
