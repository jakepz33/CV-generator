import { useState } from "react";
import "./styles/App.css";
import EditSide from "./components/editSide";
import CVside from "./components/CVside";

export const schools = [
  {
    School: "San Diego State",
    Degree: "BS Information Systems",
    "Start date": "08/22/2017",
    "End date": "05/13/2021",
    Location: "San Diego, CA",
    visible: true,
  },
  {
    School: "UCLA",
    Degree: "MS Statistics",
    "Start date": "08/22/2021",
    "End date": "05/13/2023",
    Location: "Los Angeles, CA",
    visible: true,
  },
];

export const workExperienceList = [
  {
    Company: "New York Post",
    "Position Title": "Project Manager",
    "Start date": "05/21/2023",
    "End date": "08/30/2024",
    Location: "New York",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tortor ac magna feugiat, sed dapibus ipsum ultricies. Proin nec massa ut magna luctus fermentum.",
    visible: true,
  },
];

export default function App() {
  // State for Personal Form
  const [curName, setCurName] = useState("Bruce Wayne");
  const [curEmail, setEmail] = useState("jumbotron@nextgen.io");
  const [curPhone, setPhone] = useState("298-536-0990");
  const [curAddress, setAddress] = useState("Queens, NY");

  // State for the Array of Objects
  const [schoolList, setSchoolList] = useState(schools);
  const [workList, setWorkList] = useState(workExperienceList);
  // state for customize and content button
  const [contentActive, setContentActive] = useState(true);
  const [customizeActive, setCustomizeActive] = useState(false);

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
        schoolList={schoolList}
        onSchoolList={setSchoolList}
        workList={workList}
        onWorkList={setWorkList}
        contentActive={contentActive}
        setContentActive={setContentActive}
        customizeActive={customizeActive}
        setCustomizeActive={setCustomizeActive}
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
        schoolList={schoolList}
        setSchoolList={setSchoolList}
        workList={workList}
        setWorkList={setWorkList}
      />
    </div>
  );
}
