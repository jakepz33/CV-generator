import { useState } from "react";
import "./styles/App.css";
import EditSide from "./components/editSide";
import CVside from "./components/CVside";

function newSchool(school, degree, startDate, endDate, location = null) {
  return {
    name: school,
    degree: degree,
    startDate: startDate,
    endDate: endDate,
    location: location,
  };
}

export const schools = [
  {
    School: "San Diego State",
    Degree: "BS Information Systems",
    "Start date": "08/22/2021",
    "End date": "05/13/2023",
    Location: "San Diego, CA",
    visible: true,
  },
  {
    School: "UCLA",
    Degree: "BS Statistics",
    "Start date": "08/22/2021",
    "End date": "05/13/2023",
    Location: "Los Angeles, CA",
    visible: true,
  },
];

export const workExperienceList = [
  {
    Company: "Qualcomm",
    "Position Title": "Project Manager",
    "Start date": "05/21/2023",
    "End date": "08/30/2024",
    Location: "San Diego",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tortor ac magna feugiat, sed dapibus ipsum ultricies. Proin nec massa ut magna luctus fermentum.",
    visible: true,
  },
];

export default function App() {
  // State for Personal Form
  const [curName, setCurName] = useState("Jacob Perez");
  const [curEmail, setEmail] = useState("jumbotron@nextgen.io");
  const [curPhone, setPhone] = useState("298-536-0990");
  const [curAddress, setAddress] = useState("");
  // State for Education
  // const [curSchool, seCurSchool] = useState("");
  // const [curDegree, setCurDegree] = useState("jumbotron@nextgen.io");
  // const [curStartDate, setCurStartDate] = useState("298-536-0990");
  // const [curEndDate, setCurEndDate] = useState("");
  // const [curSchoolLocation, setCurSchoolLocation] = useState("");

  // State for the Array of Objects
  const [schoolList, setSchoolList] = useState(schools);
  const [workList, setWorkList] = useState(workExperienceList);

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
