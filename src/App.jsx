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
    name: "San Diego State",
    degree: "BS Information Systems",
    startDate: "08/22/2021",
    endDate: "05/13/2023",
    location: "San Diego, CA",
  },
  {
    name: "UCLA",
    degree: "BS Statistics",
    startDate: "08/22/2021",
    endDate: "05/13/2023",
    location: "Los Angeles, CA",
  },
];

export const workExperienceList = [
  {
    name: "Qualcomm",
    position: "Project Manager",
    startDate: "05/21/2023",
    endDate: "08/30/2024",
    location: "San Diego",
    description: "",
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
      />
    </div>
  );
}
