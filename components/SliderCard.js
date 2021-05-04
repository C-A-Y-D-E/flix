import React from "react";
import { FiBookmark } from "react-icons/fi";
import Image from "next/image";
const SliderCard = () => {
  return (
    <div className="min-h-[255px] md:h-[350px] lg:h-[300px] rounded-lg relative group overflow-hidden">
      <Image
        src="/poster.jpg"
        layout="fill"
        className="object-cover filter brightness-75"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h2 className="font-medium group-hover:text-secondary text-2xl font-heading mb-2">
          The Art of Political
        </h2>
        <ul className="flex gap-4 text-sm">
          <li>Action</li>
          <li>Comedy</li>
          <li>2006</li>
        </ul>
      </div>
      <div className="opacity-0 absolute top-4 left-4 p-2 bg-primary-light rounded-lg group-hover:opacity-100">
        <div className="text-secondary text-lg ">
          <FiBookmark />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
