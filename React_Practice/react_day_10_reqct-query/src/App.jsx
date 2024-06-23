import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "./Components/Todos";
import CatFact from "./Components/CatFact";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Todos />
        <CatFact />
      </QueryClientProvider>
    </>
  );
}

export default App;
