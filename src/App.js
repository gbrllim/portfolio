//-----------Libraries-----------//
import React from "react";

//-----------Components-----------//
import About from "./components/About";

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <header className="bg-red-200 text-xl">gab</header>
      <About />
    </div>
  );
};

export default App;
