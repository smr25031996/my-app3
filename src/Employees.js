import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Employees = () => {
  const [employees, setEmployees] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);

  const addEmployee = () => {
    setEmployees([
      ...employees,
      { empId: 6789, name: "Clara", designation: "TL" },
    ]);
  };

  return (
    <React.Fragment>
      <table style={{ width: "60%" }} className="table">
        <thead className="thead-light">
          <tr>
            <th>Emp Id</th>
            <th>Emp Name</th>
            <th>Emp Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addEmployee}>
        Add Employee
      </button>
    </React.Fragment>
  );
};
export default Employees;
