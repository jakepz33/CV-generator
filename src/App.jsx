import { useState } from "react";
import "./styles/App.css";
import EditSide from "./components/editSide";
import CVside from "./components/CVside";

export default function App() {
  return (
    <div className="app">
      <EditSide />
      <CVside />
    </div>
  );
}
