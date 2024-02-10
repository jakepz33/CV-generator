import { useState } from "react";
import Button from "./button";
import { schools } from "../App";
import { workExperienceList } from "../App";

function Tab({
  description,
  icon,
  formType,
  activeTab,
  onActiveTab,
  itemList,
  onItemList,
}) {
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
        <AddItem
          description={description}
          handleAdd={handleAdd}
          itemList={itemList}
          onItemList={onItemList}
        />
      ) : (
        ""
      )}

      {/* {activeTab === formType ? <Forms formType={formType} /> : ""} */}
      {showForm && (
        <Forms
          formType={formType}
          itemList={itemList}
          onItemList={onItemList}
          setShowForm={setShowForm}
          setShowAdd={setShowAdd}
        />
      )}
    </div>
  );
}

function AddItem({ description, handleAdd, itemList }) {
  // function handleAdd() {
  //   console.log("Add Button + description", description);
  // }
  return (
    <div className="add-item">
      {itemList.map((item) => (
        <ListItem
          title={item.name || item.School || item.Company}
          key={item.name || item.School || item.Company}
        />
      ))}
      {/* <ListItem />
      <ListItem /> */}
      <div className="add-button-container">
        <button className="add-button" onClick={handleAdd}>
          + {description}
        </button>
      </div>
    </div>
  );
}
function ListItem({ title }) {
  return (
    <div className="list-item">
      <p>{title}</p>
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
  // for schoolForm
  itemList,
  onItemList,
  setShowForm,
  setShowAdd,
}) {
  const [formData, setFormData] = useState({});

  //testing education state
  const [curSchool, setCurSchool] = useState("");
  const [curDegree, setCurDegree] = useState("");
  const [curStartDate, setCurStartDate] = useState("");
  const [curEndDate, setCurEndDate] = useState("");
  const [curSchoolLocation, setCurSchoolLocation] = useState("");

  // experience state
  const [curCompany, setCurCompany] = useState("");
  const [curPosition, setCurPosition] = useState("");
  const [jobStartDate, setJobStartDate] = useState("");
  const [jobEndDate, setJobEndDate] = useState("");
  const [curJobLocation, setCurJobLocation] = useState("");
  const [curDescription, setCurDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(itemList);
    const newItem = { ...formData };
    onItemList((prevList) => [...prevList, newItem]);
    console.log(formData);
    setShowForm(false);
    setShowAdd(true);
  }

  function handleInputChange(name, value) {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  return (
    <form
      className={`form ${formPersonal ? "form-personal" : ""}`}
      onSubmit={handleSubmit}
    >
      {formType === "education" ? (
        <>
          <FormItem
            label="School"
            placeHolder="enter school / university"
            curItem={curSchool}
            onCurItem={setCurSchool}
            onChange={handleInputChange}
          />
          <FormItem
            label="Degree"
            placeHolder="enter degree / field of study"
            curItem={curDegree}
            onCurItem={setCurDegree}
            onChange={handleInputChange}
          />
          <div className="startEnd">
            <FormItem
              label="Start date"
              placeHolder="enter start date"
              startEnd={true}
              curItem={curStartDate}
              onCurItem={setCurStartDate}
              onChange={handleInputChange}
            />
            <FormItem
              label="End date"
              placeHolder="enter end date"
              startEnd={true}
              curItem={curEndDate}
              onCurItem={setCurEndDate}
              onChange={handleInputChange}
            />
          </div>
          <FormItem
            label="Location"
            placeHolder="enter location"
            curItem={curSchoolLocation}
            onCurItem={setCurSchoolLocation}
            onChange={handleInputChange}
          />
          <Button className="save-cancel" />
        </>
      ) : formType === "workExperience" ? (
        <>
          <FormItem
            label="Company"
            placeHolder="enter company name"
            curItem={curCompany}
            onCurItem={setCurCompany}
            onChange={handleInputChange}
          />
          <FormItem
            label="Position Title"
            placeHolder="enter position title"
            curItem={curPosition}
            onCurItem={setCurPosition}
            onChange={handleInputChange}
          />
          <div className="startEnd">
            <FormItem
              label="Start date"
              startEnd={true}
              placeHolder="enter start date"
              curItem={jobStartDate}
              onCurItem={setJobStartDate}
              onChange={handleInputChange}
            />
            <FormItem
              label="End date"
              startEnd={true}
              placeHolder="enter end date"
              curItem={jobEndDate}
              onCurItem={setJobEndDate}
              onChange={handleInputChange}
            />
          </div>
          <FormItem
            label="Location"
            placeHolder="enter location"
            curItem={curJobLocation}
            onCurItem={setCurJobLocation}
            onChange={handleInputChange}
          />
          <FormItem
            label="Description"
            placeHolder="enter description"
            curItem={curDescription}
            onCurItem={setCurDescription}
            onChange={handleInputChange}
          />
          <Button className="save-cancel" />
        </>
      ) : (
        <>
          <h2>Personal Information</h2>
          <FormItem
            label="Full Name"
            placeHolder="first and last name"
            curItem={curName}
            onCurItem={onCurName}
          />
          <FormItem
            label="Email"
            placeHolder="enter email address"
            curItem={curEmail}
            onCurItem={onSetEmail}
          />
          <FormItem
            label="Phone Number"
            placeHolder="enter phone number"
            curItem={curPhone}
            onCurItem={onSetPhone}
          />
          <FormItem
            label="Address"
            placeHolder="City, Country"
            curItem={curAddress}
            onCurItem={onSetAddress}
          />
        </>
      )}
    </form>
  );
}

function FormItem({
  label,
  startEnd,
  placeHolder,
  curItem,
  onCurItem,
  onChange,
}) {
  return (
    <div className={`form-item ${startEnd ? "start-date" : ""}`}>
      <label>{label}</label>
      <input
        type="text"
        className="form-input"
        placeholder={placeHolder}
        // value={curItem}
        onChange={(e) => {
          onChange(label, e.target.value);
          onCurItem(e.target.value);
        }}
      ></input>
    </div>
  );
}

export { Tab, Forms };
