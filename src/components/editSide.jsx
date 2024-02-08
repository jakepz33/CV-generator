import { useState } from "react";
import { Tab, Forms } from "./tabs";
import Button from "./button";

export default function EditSide() {
  return (
    <div className="appChild edit-side">
      <SideBar />
      <FormFields />
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

function FormFields() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="form-fields">
      <div className="form-edits">
        <Button className="form-edits-btn">
          <p>Clear Resume</p>
        </Button>
        <Button className="form-edits-btn">
          <p>Load Example</p>
        </Button>
      </div>
      <Forms formType="personal" formPersonal="form-personal" />
      <Tab
        description="Education"
        icon="school"
        formType="education"
        activeTab={activeTab}
        onActiveTab={setActiveTab}
      />
      <Tab
        description="Experience"
        icon="work"
        formType="workExperience"
        activeTab={activeTab}
        onActiveTab={setActiveTab}
      />
    </div>
  );
}
