import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
function GenerateExcuse() {
  const [excuseCategory, setExcuseCategory] = useState("");
  const [excuse, setExcuse] = useState("");

  useEffect(() => {
    if (excuseCategory) {
      fetchExcuse();
    }
  }, [excuseCategory]);
  function fetchExcuse() {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseCategory}`)
      .then((res) => {
        console.log(res.data);
        setExcuse(res.data[0]);
      })
      .catch((err) => {
        console.log("Error while fetching excuse", err);
      });
  }
  function chooseExcuse(event) {
    event.preventDefault();
    setExcuseCategory(event.target.value);
  }
  return (
    <>
      <button onClick={chooseExcuse} value={"family"}>
        Family
      </button>
      <button onClick={chooseExcuse} value={"office"}>
        Office
      </button>
      <button onClick={chooseExcuse} value={"party"}>
        Party
      </button>
      <h1>Excuse Category: {excuse.category}</h1>
      <h1>Excuse: {excuse.excuse}</h1>
    </>
  );
}

export default GenerateExcuse;
