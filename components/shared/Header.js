import React from "react";
import { FiSearch, FiLogIn } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="px-4 h-20 flex items-center justify-between bg-primary fixed top-0 left-0 right-0 container mx-auto">
      <div>
        <Image src="/icon-white.svg" alt="anime-time" width={80} height={50} />
      </div>

      <div className="flex items-center gap-8">
        <div className="text-xl text-secondary">
          <FiSearch />
        </div>
        <Link href="/signin">
          <a className="text-white flex items-center gap-4">
            <span className="text-sm">Sign in</span>
            <FiLogIn className="text-xl text-secondary" />
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Header;
