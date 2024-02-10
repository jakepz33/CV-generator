import { useState } from "react";

export default function ListInfo({ itemList, heading }) {
  return (
    <div className="info-container">
      <div className="header-container">
        <h3>{heading}</h3>
      </div>
      <InfoDisplay itemList={itemList} />
    </div>
  );
}

function InfoDisplay({ itemList }) {
  return itemList.map((item) => (
    <ListItem item={item} key={item.name || item.School || item.Company} />
  ));
}

function ListItem({ item }) {
  return (
    // <div>{`${item["Start date"]}`}</div>
    <div className="grid-info">
      <p>{`${item["Start date"]} - ${item["End date"]}`} </p>
      <p>
        <b>{item.School || item.Company}</b>
      </p>
      <p>{item.Location}</p>
      <p>{item.Degree || item["Position Title"]}</p>
    </div>
  );
}
