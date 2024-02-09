import { useState } from "react";

export default function ListInfo() {
  return (
    <div className="info-container">
      <div className="header-container">
        <h3>Education</h3>
      </div>
      <InfoDisplay />
    </div>
  );
}

function InfoDisplay() {
  return (
    <div className="grid-info">
      <p>08/2020 - present</p>
      <p>
        <b>London City University</b>
      </p>
      <p>New York City, US</p>
      <p>Bachelor in Economics</p>
    </div>
  );
}
