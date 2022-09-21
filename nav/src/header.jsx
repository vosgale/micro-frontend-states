import React from "react";
import { useCount } from "host/store";
import useStore from "host/storeZustand";
export default () => {
  const [count, setCount] = useCount();
  const { count: countZustend, clear } = useStore();
  return (
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow">Componente: Nav</div>
      <div className="flex gap-3">
        <div className="text-sm">
          <span className="mr-8">Contador vindo do host {count}</span>
          <button
            className="bg-indigo-800 p-2 rounded"
            onClick={() => setCount(0)}
          >
            Limpar
          </button>
        </div>
        <div className="text-sm">
          <span className="mr-8">Contador vindo do Zustend {countZustend}</span>
          <button
            className="bg-red-800 p-2 rounded"
            onClick={clear}
          >
            Limpar
          </button>
        </div>
      </div>
    </header>
  );
};
