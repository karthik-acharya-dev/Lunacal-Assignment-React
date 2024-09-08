import React, { useState, useRef } from "react";
import reactImg from "../assets/Vector.png";
import gridImg from "../assets/gridImg.png";
import rectImg from "../assets/Rectangle 5160.png";
import rightArrow from "../assets/Group 28 (1).png";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const imageRowRef = useRef(null);

  const addImage = () => {
    const newImage = `https://source.unsplash.com/random/200x200?sig=${Math.random()}`;
    setImages([...images, newImage]);
  };

  const scrollLeft = () => {
    if (imageRowRef.current) {
      imageRowRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (imageRowRef.current) {
      imageRowRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    // <div className="bg-[#363c43] px-4 py-4 lg:px-6 lg:pt-6 shadow-md rounded-3xl flex flex-col w-full lg:h-[50%]">
    <div className="bg-[#363c43] px-4 py-4 lg:px-6 lg:pt-6 shadow-md rounded-3xl flex flex-col w-full  h-[50%] lg:h-[50%]">
      <div className="flex justify-between mb-4 ">
        <div className="flex gap-3 lg:gap-5 items-center">
          <div className="w-12 h-12 lg:w-16 lg:h-16">
            <img src={reactImg} alt="Logo" />
          </div>
          <button className="bg-[#171717] py-2 px-6 text-sm lg:text-base text-white rounded-xl shadow-inner flex justify-center font-inter  items-center">
            Gallery
          </button>
        </div>

        <div className="flex gap-2 lg:gap-4 items-center">
          {/* <button
            onClick={addImage}
            className="bg-[#41474e] text-white font-bold text-xs lg:text-sm px-4 py-2 rounded-full shadow-lg flex justify-center font-inter  items-center"
          >
            + Add Image
          </button> */}
          <div className="shadow-[-2px_-4px_25px_-9px_#8a8a8a] w-full rounded-full">
            <button
              onClick={addImage}
              className="px-5 py-3 bg-[#41474e] text-white font-bold text-[9px] lg:text-xs rounded-full flex justify-center font-inter items-center shadow-[5px_5px_5px_-1px_#1a1a1a,inset_4px_4px_5px_-1px_#707070]"
            >
              + ADD IMAGE
            </button>
          </div>
          <div className="flex gap-4 items-center">
            {/* Left Arrow */}
            <div
              className="w-9 h-9 rounded-full cursor-pointer bg-[#1d1f22] flex justify-center p-[10px] bg-gradient-to-r from-[#2c3034] to-[#1c1e20] shadow-[-5px_-4px_10px_0_rgba(100,135,155,0.5)]"
              onClick={scrollLeft}
            >
              <img src={rightArrow} className="rotate-180" alt="Left Arrow" />
            </div>

            {/* Right Arrow */}
            <div
              className="w-9 h-9 rounded-full cursor-pointer bg-[#1d1f22] flex justify-center p-[10px] bg-gradient-to-r from-[#2c3034] to-[#1c1e20] shadow-[-5px_-4px_10px_0_rgba(100,135,155,0.5)]"
              onClick={scrollRight}
            >
              <img src={rightArrow} alt="Right Arrow" />
            </div>
          </div>
        </div>
      </div>

      {/* Image Row */}
      <div className=" w-full h-[150px] flex gap-5">
        <div className="w-4 lg:w-5 pt-2 lg:pt-6">
          <img src={gridImg} alt="Tab Image" />
        </div>
        <div className="w-full h-[150px] flex">
          <div
            className="flex gap-4 overflow-x-auto scrollbar-hide"
            ref={imageRowRef}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={rectImg}
                alt={`Gallery ${index}`}
                className="w-[100px] h-[100px] lg:w-[140px] lg:h-[140px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
