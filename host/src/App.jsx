import React from "react";
import ReactDOM from "react-dom";
import Header from "nav/Header";
import "./index.scss";
import { CountProvider, useCount } from "host/store";
import useStore from "host/storeZustand";
const App = () => {
  const [count, setCount] = useCount();
  const { count: countZustand, increment } = useStore();
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div>Componente: Host</div>
      <div>Contador Context: {count}</div>
      <div>
        <button
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          Adicionar
        </button>
      </div>
      
      {/* Zustand======================================= */}

      <div>Contador Zustand: {countZustand}</div>
      <div>
        <button
          className="bg-red-800 text-white font-bold py-2 px-4 rounded"
          onClick={increment}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("app")
);
