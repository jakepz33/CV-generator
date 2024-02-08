import { useState } from "react";

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
