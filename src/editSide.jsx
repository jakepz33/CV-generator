import { useState } from "react";

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

function Button({ icon, children, className }) {
  return (
    <button className={className}>
      {icon ? <span className="material-symbols-outlined">{icon}</span> : ""}
      {children}
    </button>
  );
}

function FormFields() {
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
      <div className="personal-info">
        <h2>Personal Information</h2>
        <Item label="Full Name" />
        <Item label="Email" />
        <Item label="Phone Number" />
        <Item label="Address" />
      </div>
      <DropDownBar description="Education" icon="school" />
      <DropDownBar description="Experience" icon="work" />
    </div>
  );
}

function Item({ label }) {
  return (
    <div className="item">
      <label className="entry-label">{label}</label>
      <input
        className="text-inputs"
        type="text"
        placeholder={label.toLowerCase()}
      ></input>
    </div>
  );
}

function DropDownBar({ description, icon }) {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleClick(event) {
    const arrow = event.currentTarget.querySelector(".expand");
    arrow.classList.toggle("rotate");
  }
  return (
    <>
      <div className="tab" onClick={handleClick}>
        <span className="material-icons">{icon}</span>
        <p>{description}</p>
        <span className="material-symbols-outlined expand">expand_more</span>
      </div>
    </>
  );
}