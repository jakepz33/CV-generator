import { useState } from "react";
import Button from "./button";

function Tab({ description, icon, formType, activeTab, onActiveTab }) {
  // active tab is nothing
  const [showForm, setShowForm] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  function handleClick(event) {
    const arrow = event.currentTarget.querySelector(".expand");
    // arrow.classList.toggle("rotate");
    //console.log("making the tab.", activeTab);
    const allArrows = document.querySelectorAll(".expand");

    allArrows.forEach((arrow) => {
      arrow.classList.remove("rotate");
    });
    // make active tab state == ""
    // setShowAdd to false
    if (activeTab === formType) {
      onActiveTab("");
      setShowAdd(false);
      setShowForm(false);
      console.log("form rtyp", formType);
    } else {
      onActiveTab(formType);
      setShowAdd(true);
      arrow.classList.add("rotate");
    }
    console.log("making the tab.", activeTab);
  }

  function handleAdd() {
    setShowForm(true);
    setShowAdd(false);
    console.log("Add Button + description", showForm);
  }

  //{activeTab === formType ? (
  // <AddItem description={description} handleAdd={handleAdd} />
  // )
  return (
    <div>
      <div className="tab" onClick={handleClick}>
        <span className="material-icons">{icon}</span>
        <p>{description}</p>
        <span className="material-symbols-outlined expand">expand_more</span>
        {/* <Forms formType="education" /> */}
      </div>
      {showAdd && activeTab === formType ? (
        <AddItem description={description} handleAdd={handleAdd} />
      ) : (
        ""
      )}
      {/* {activeTab === formType ? <Forms formType={formType} /> : ""} */}
      {showForm && <Forms formType={formType} />}
    </div>
  );
}

function AddItem({ description, handleAdd }) {
  // function handleAdd() {
  //   console.log("Add Button + description", description);
  // }
  return (
    <div className="add-item">
      <div className="list-item">
        <p>X University</p>
      </div>
      <div className="add-button-container">
        <button className="add-button" onClick={handleAdd}>
          + {description}
        </button>
      </div>
    </div>
  );
}

function Forms({
  formType,
  formPersonal,
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curAddress,
  onSetAddress,
}) {
  return (
    <form className={`form ${formPersonal ? "form-personal" : ""}`}>
      {formType === "education" ? (
        <>
          <FormItem label="School" />
          <FormItem label="Degree" />
          <div className="startEnd">
            <FormItem label="Start date" startEnd={true} />
            <FormItem label="End date" startEnd={true} />
          </div>
          <FormItem label="Location" />
          <Button className="save-cancel" />
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
          <FormItem label="Full Name" curItem={curName} onCurItem={onCurName} />
          <FormItem label="Email" curItem={curEmail} onCurItem={onSetEmail} />
          <FormItem
            label="Phone Number"
            curItem={curPhone}
            onCurItem={onSetPhone}
          />
          <FormItem
            label="Address"
            curItem={curAddress}
            onCurItem={onSetAddress}
          />
        </>
      )}
    </form>
  );
}

function FormItem({ label, startEnd, placeHolder, curItem, onCurItem }) {
  return (
    <div className={`form-item ${startEnd ? "start-date" : ""}`}>
      <label>{label}</label>
      <input
        type="text"
        className="form-input"
        value={curItem}
        onChange={(e) => onCurItem(e.target.value)}
      ></input>
    </div>
  );
}

export { Tab, Forms };
