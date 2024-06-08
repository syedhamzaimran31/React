import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

function EmployeeTable() {
  const [employeeData, setEmployeeData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const databaseRef = ref(getDatabase());
      try {
        const snapshot = await get(child(databaseRef, `employees`));
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  // get(child(databaseRef, ``)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  return (
    <>
      <div></div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee Position</th>
            <th>Trainer Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${}</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>1975</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default EmployeeTable;
