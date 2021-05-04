import React from "react";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  return (
    <div className="min-h-full  overflow-hidden relative flex flex-col space-y-1">
      <Link href="/abc">
        <a className="overflow-hidden">
          <Image
            src="/poster.jpg"
            height="130"
            width="100"
            layout="responsive"
            className="object-cover rounded-xl"
          />
        </a>
      </Link>

      <h2 className="text-md whitespace-nowrap  overflow-ellipsis">
        Tokyo Ghoul asdasdasdasd
      </h2>
      <ul className="flex gap-2 text-xs">
        <li>Action</li>
        <li>Comedy</li>
      </ul>
    </div>
  );
};

export default Card;
