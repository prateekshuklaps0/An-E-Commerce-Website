import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux"; // Updated import
import { store } from "./Redux/Store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <ReduxProvider store={store}> {/* Updated usage */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider> {/* Updated usage */}
  </ChakraProvider>
);

reportWebVitals();
