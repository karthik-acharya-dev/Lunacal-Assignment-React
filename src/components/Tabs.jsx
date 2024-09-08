import React, { useState } from "react";
import reactImg from "../assets/Vector.png";
import gridImg from "../assets/gridImg.png";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="bg-[#363c43] px-4 py-4 lg:px-6 lg:pt-6 shadow-md rounded-3xl flex flex-col w-full lg:h-[50%]">
      <div className="flex gap-3 lg:gap-5 items-center">
        {/* Left image section */}
        <div className="w-12 h-12 lg:w-16 lg:h-16">
          <img src={reactImg} alt="Logo" />
        </div>

        {/* Tabs section */}
        <div className="flex justify-between mb-4 bg-[#171717] w-full rounded-xl text-gray-400">
          {["about", "experiences", "recommended"].map((tab) => (
            <button
              key={tab}
              className={`w-full py-1 px-2 text-xs lg:text-sm flex justify-center font-inter  items-center ${
                activeTab === tab
                  ? "rounded-lg bg-[#28292f] text-white m-1  shadow-[9px_20px_40px_8px_#000000]"
                  : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content section */}
      <div className="my-3 flex gap-3 lg:gap-5">
        <div className="w-4 lg:w-5 pt-2 lg:pt-6">
          <img src={gridImg} alt="Tab Image" />
        </div>

        {/* Content with fixed height and scroll */}
        <div className="w-full text-gray-400 text-sm lg:text-base overflow-y-auto custom-scrollbar h-[120px] lg:h-[100px]">
          {activeTab === "about" && (
            <p>
              This is the About Me section with more content to test scrolling.
              Add as much text here to check the scroll behavior. We want to go
              through this figma file and develop it with the relevant tech
              stack, such as React.js, Tailwind CSS, and any preferred UI
              library. This is the About Me section with more content to test
              scrolling. Add as much text here to check the scroll behavior. We
              want to go through this figma file and develop it with the
              relevant tech stack, such as React.js, Tailwind CSS, and any
              preferred UI This is the About Me section with more content to
              test scrolling. Add as much text here to check the scroll
              behavior. We want to go through this figma file and develop it
              with the relevant tech stack, such as React.js, Tailwind CSS, and
              any preferred UI This is the About Me section with more content to
              test scrolling. Add as much text here to check the scroll
              behavior. We want to go through this figma file and develop it
              with the relevant tech stack, such as React.js, Tailwind CSS, and
              any preferred UI
            </p>
          )}
          {activeTab === "experiences" && (
            <p>This is the Experiences section.</p>
          )}
          {activeTab === "recommended" && (
            <p>This is the Recommended section.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
