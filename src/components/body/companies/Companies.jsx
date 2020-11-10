import React from "react";

export default function Companies(props) {
  return (
    <div className="companies-container" id="companies-container">
      <h2>{props.companiesHeader}</h2>
      <div className="data-companies">
        <h3>{props.dataCompaniesHeader}</h3>
      </div>
      <div className="development-companies">
        {props.developmentCompaniesHeader}
      </div>
    </div>
  );
}
