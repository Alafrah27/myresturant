import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FilterProvider } from "./context/filterContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClinet = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet}>
      <FilterProvider>
        <App />
      </FilterProvider>
    </QueryClientProvider>
  </StrictMode>
);
