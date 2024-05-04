import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import WriteUserData from "./WriteUserData";
function EmployeInputForm() {
  const [employeName, setEmployeName] = useState("");
  const [employePosition, setEmployePosition] = useState("");
  const [employeTrainer, setEmployeTrainer] = useState("");

  useEffect(() => {
    console.log(employePosition);
    console.log(employeTrainer);
    console.log(employeName);
  }, [employePosition, employeTrainer, employeName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    WriteUserData(employeName, employePosition, employeTrainer);
  };
  const selectEmployePosition = (event) => {
    setEmployePosition(event.target.value);
  };
  const selectEmployeeTrainer = (event) => {
    setEmployeTrainer(event.target.value);
  };
  return (
    <>
      <div className="w-full max-w-xs container mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-red-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setEmployeName(e.target.value)}
            />
          </div>
          <div className="inline-block relative w-64">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Position
            </label>
            <select
              value={employePosition}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              onChange={selectEmployePosition}
            >
              <option>Internee</option>
              <option>Junior Developer</option>
              <option>Senior Developer</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="inline-block relative w-64">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Supervisor
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={employeTrainer}
              onChange={selectEmployeeTrainer}
            >
              <option value="Trainer 1">Trainer 1</option>
              <option value="Trainer 2">Trainer 2</option>
              <option value="Trainer 3">Trainer 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <button
            className=" mt-8 w-64 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default EmployeInputForm;
