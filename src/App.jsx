import { useState } from "react";
import "./styles/App.css";
import EditSide from "./editSide";
import CVside from "./CVside";

export default function App() {
  return (
    <div className="app">
      <EditSide />
      <CVside />
    </div>
  );
}
