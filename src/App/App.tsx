import React from "react";

import style from "./App.module.scss";
import SearchBox from "./components/SearchBox";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

function App() {
  return (
    <div className="App">
      <SearchBox />
      <div className={style.notesContainer}>
        <Sidebar />
        <Workspace />
      </div>
    </div>
  );
}

export default App;
