import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/header/Header";
import SearchBar from "./Component/searchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <div className="searchBar">
        <SearchBar />
      </div>
      <div className="container"></div>
    </div>
  );
}

export default App;
