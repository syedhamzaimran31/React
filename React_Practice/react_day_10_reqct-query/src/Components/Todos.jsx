import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function Todos() {
  const fetchTodos = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    return res.data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  if (isError) {
    return <h1>Error Fetching data</h1>;
  }
  if (isLoading) {
    return <h1>Loading..</h1>;
  }
  const dataTodos = data.map((todos) => {
    if (todos.id === 1) {
      return (
        <h1 key={todos.id}>
          The todos id : {todos.id}
          <br /> The todos title is : {todos.title}
        </h1>
      );
    }
  });
  return <>{dataTodos}</>;
}
export default Todos;
