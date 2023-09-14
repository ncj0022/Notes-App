import { React } from "react";
import "./Components/css/App.css";
import Header from "./Components/NoteComponents/Header";
import Notes from "./Components/NoteComponents/Notes";

function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
    </div>
  );
}

export default App;
