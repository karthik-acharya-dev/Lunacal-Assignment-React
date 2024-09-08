import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between bg-[#272B30] py-20 lg:py-6 px-2 lg:px-5">
      {/* Left half (empty on laptops, hidden on mobile) */}
      <div className="hidden lg:block w-1/2 m-5 rounded-3xl border-[1px] border-blue-400 bg-[#565758]"></div>

      {/* Right half with Tabs and Gallery */}
      <div className="w-full lg:w-1/2 space-y-4 lg:space-y-3 my-5 flex lg:h-[90vh]  flex-col items-center">
        <Tabs />
        <div className="w-[90%] h-[3px] bg-[#35373a] rounded-full shadow-[0px_4px_10px_1px_rgba(0,_0,_0,_0.3)]"></div>
        <Gallery />
        <div className="w-[90%] h-[3px] bg-[#35373a] rounded-full shadow-[0px_4px_10px_1px_rgba(0,_0,_0,_0.3)]"></div>
      </div>
    </div>
  );
};

export default App;
