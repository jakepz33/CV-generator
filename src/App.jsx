import { useState } from "react";
import "./styles/App.css";
import EditSide from "./components/editSide";
import CVside from "./components/CVside";

function newSchool(school, degree, startDate, endDate, location = null) {
  return {
    school: school,
    degree: degree,
    startDate: startDate,
    endDate: endDate,
    location: location,
  };
}

const schools = [
  {
    school: "San Diego State",
    degree: "BS Information Systems",
    startDate: "08/22/2021",
    endDate: "05/13/2023",
    location: "San Diego, CA",
  },
];

export default function App() {
  return (
    <div className="app">
      <EditSide />
      <CVside />
    </div>
  );
}
