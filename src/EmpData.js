import { useState } from "react";
import Employees from "./Employees";

const EmpData = () => {
  const [employees] = useState([
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ]);

  return(
    <Employees employees={employees}/>
  )
};

export default EmpData;