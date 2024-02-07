import { useState } from "react";

function Tab({ description, icon }) {
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
        {/* <Forms formType="education" /> */}
      </div>
    </>
  );
}

function Forms({ formType }) {
  return (
    <form className="form">
      {formType === "education" ? (
        <>
          <FormItem label="School" />
          <FormItem label="Degree" />
          <div className="startEnd">
            <FormItem label="Start date" startEnd={true} />
            <FormItem label="End date" startEnd={true} />
          </div>
          <FormItem label="Location" />
        </>
      ) : formType === "workExperience" ? (
        <>
          <FormItem label="Company name" />
          <FormItem label="Position Title" />
          <div className="startEnd">
            <FormItem label="Start date" startEnd={true} />
            <FormItem label="End date" startEnd={true} />
          </div>
          <FormItem label="Location" />
          <FormItem label="Description" />
        </>
      ) : (
        <>
          <h2>Personal Information</h2>
          <FormItem label="Full Name" />
          <FormItem label="Email" />
          <FormItem label="Phone Number" />
          <FormItem label="Address" />
        </>
      )}
    </form>
  );
}

function FormItem({ label, startEnd, placeHolder }) {
  return (
    <div className={`form-item ${startEnd ? "start-date" : ""}`}>
      <label>{label}</label>
      <input type="text" className="form-input"></input>
    </div>
  );
}

export { Tab, Forms };
