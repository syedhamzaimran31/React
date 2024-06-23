import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function CatFact() {
  const fetchCatFact = () => {
    return axios.get("https://catfact.ninja/fact").then((res) => res.data);
  };
  const { isLoading, data, error } = useQuery({
    queryKey: ["catFact"],
    queryFn: fetchCatFact,
  });
  if (error) {
    return <h1>Error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>The Fact : {data.fact}</h1>
    </>
  );
}

export default CatFact;
