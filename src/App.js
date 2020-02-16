import React from "react";
import "./styles.css";
import { TextList } from "./components/TextList/index";

export default function App() {
  return (
    <div className="App">
      <h1 /* style={{ height: 100 }} */>Hello Nicola</h1>
      <h2>Start editing to see some magic happen!</h2>

      <TextList title="Hobbies" value="Read" />
      <hr />
      <TextList />
    </div>
  );
}
