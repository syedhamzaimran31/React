import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Todos from "./Components/Todos";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    </>
  );
}

export default App;
