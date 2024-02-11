import { useState } from "react";
import { Tab, Forms } from "./tabs";
import Button from "./button";
import { schools } from "../App";
import { workExperienceList } from "../App";

export default function EditSide({
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curAddress,
  onSetAddress,
  schoolList,
  onSchoolList,
  workList,
  onWorkList,
}) {
  return (
    <div className="appChild edit-side">
      <SideBar />
      <FormFields
        curName={curName}
        onCurName={onCurName}
        curEmail={curEmail}
        onSetEmail={onSetEmail}
        curPhone={curPhone}
        onSetPhone={onSetPhone}
        curAddress={curAddress}
        onSetAddress={onSetAddress}
        schoolList={schoolList}
        onSchoolList={onSchoolList}
        workList={workList}
        onWorkList={onWorkList}
      />
    </div>
  );
}

function SideBar() {
  return (
    <div className="sideBar">
      <Button className="sideBar-btn" icon="description">
        <p>Content</p>
      </Button>

      <Button className="sideBar-btn" icon="design_services">
        <p>Customize</p>
      </Button>
    </div>
  );
}

// function Button({ icon, children, className }) {
//   return (
//     <button className={className}>
//       {icon ? <span className="material-symbols-outlined">{icon}</span> : ""}
//       {children}
//     </button>
//   );
// }

function FormFields({
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curAddress,
  onSetAddress,
  schoolList,
  onSchoolList,
  workList,
  onWorkList,
}) {
  const [activeTab, setActiveTab] = useState("");

  function handleClearResume() {
    console.log("Clear Resume");
    onCurName("");
    onSetEmail("");
    onSetPhone("");
    onSetAddress("");
    onSchoolList([]);
    onWorkList([]);
  }

  function handleLoadExample() {
    console.log("Load Example");
    onCurName("Bruce Wayne");
    onSetEmail("jumbotron@cave.io");
    onSetPhone("123-445-2022");
    onSetAddress("Gotham, MA");
    onSchoolList(schools);
    onWorkList(workExperienceList);
  }
  return (
    <div className="form-fields">
      <div className="form-edits">
        <Button
          className="form-edits-btn clear-resume"
          buttonFunction={handleClearResume}
        >
          <p>Clear Resume</p>
        </Button>
        <Button
          className="form-edits-btn load-example"
          buttonFunction={handleLoadExample}
        >
          <p>Load Example</p>
        </Button>
      </div>
      <Forms
        formType="personal"
        formPersonal="form-personal"
        curName={curName}
        onCurName={onCurName}
        curEmail={curEmail}
        onSetEmail={onSetEmail}
        curPhone={curPhone}
        onSetPhone={onSetPhone}
        curAddress={curAddress}
        onSetAddress={onSetAddress}
      />
      <Tab
        description="Education"
        icon="school"
        formType="education"
        activeTab={activeTab}
        onActiveTab={setActiveTab}
        itemList={schoolList}
        onItemList={onSchoolList}
      />
      <Tab
        description="Experience"
        icon="work"
        formType="workExperience"
        activeTab={activeTab}
        onActiveTab={setActiveTab}
        itemList={workList}
        onItemList={onWorkList}
      />
    </div>
  );
}
