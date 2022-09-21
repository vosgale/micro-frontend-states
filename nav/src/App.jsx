import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import "./index.scss";
import { CountProvider } from "host/store";
const App = () => (
  <CountProvider>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Name: nav</div>
    </div>
  </CountProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
