import React from 'react';
const NewCard = ({ backgroundColor, data }) => {
  const { title, desc } = data;
  return (
    <div
      className={`${backgroundColor} w-full md:w-80 h-80 md:h-[350px] text-center py-3 px-3 my-5 xl:my-14 rounded-2xl cursor-pointer shadow-xl hover:shadow-md trasition duration-300 ease-in-out`}
    >
      <h3 className="text-2xl font-extrabold text-gray-800 uppercase mt-6 my-8 mx-10">{title}</h3>
      <p className="text-lg md:text-md mt-4 mb-2 xl:text-lg text-gray-700 w-[90%] mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default NewCard;