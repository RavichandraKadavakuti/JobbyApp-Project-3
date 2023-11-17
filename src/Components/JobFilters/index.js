import React from "react";
import { employmentTypesList , salaryRangesList} from "../../Utilities";

const JobFilters = () => {
  return (
    <div className="container">
      <div className="row">
        <div>
          <h4>Type of Employment</h4>
          <ul>
            {employmentTypesList.map((each) => (
              <li key={each.employmentTypeId}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id={each.label}
                    className="form-check-input"
                  />
                  <label htmlFor={each.label} className="form-check-label">
                    {each.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div>
          <h4>Salary Range</h4>
          <ul>
            {salaryRangesList.map((each) => (
              <li key={each.salaryRangeId}>
                <div className="form-check">
                  <input
                    type="radio"
                    name="salary"
                    id={each.label}
                    className="form-check-input"
                  />
                  <label htmlFor={each.label} className="form-check-label">
                    {each.label}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
