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
  const [curName, setCurName] = useState("Jacob Perez");
  const [curEmail, setEmail] = useState("jumbotron@nextgen.io");
  const [curPhone, setPhone] = useState("298-536-0990");
  const [curAddress, setAddress] = useState("");
  return (
    <div className="app">
      <EditSide
        curName={curName}
        onCurName={setCurName}
        curEmail={curEmail}
        onSetEmail={setEmail}
        curPhone={curPhone}
        onSetPhone={setPhone}
        curAddress={curAddress}
        onSetAddress={setAddress}
      />
      <CVside
        curName={curName}
        onCurName={setCurName}
        curEmail={curEmail}
        onSetEmail={setEmail}
        curPhone={curPhone}
        onSetPhone={setPhone}
        curAddress={curAddress}
        onSetAddress={setAddress}
      />
    </div>
  );
}
