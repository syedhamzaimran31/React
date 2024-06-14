import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function PredictAge() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState({});
  function predictAge() {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        console.log(res.data)
      setPredictedAge(res.data);
    });
  }

  return (
    <>
      <input
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder="Ex. Hamza.."
      />
      <button onClick={predictAge}>Predict Age</button>
      <h1>Name:{predictedAge.name}</h1>
      <h1>Predicted Age:{predictedAge.age}</h1>
    </>
  );
}

export default PredictAge;
