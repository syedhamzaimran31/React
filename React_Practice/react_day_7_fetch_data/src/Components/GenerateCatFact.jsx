import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
function GenerateCatFact() {
  const [catFact, setcatFact] = useState("");

  useEffect(() => {
    // fetchCatFact();
  }, []);

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setcatFact(res.data.fact);
    });
  };
  return (
    <>
      <button onClick={fetchCatFact}>Genrate Cat Fact</button>
      <p>{catFact}</p>
    </>
  );
}

export default GenerateCatFact;
