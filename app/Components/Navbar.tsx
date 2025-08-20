import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="Container flex justify-between items-center">
        <div>
          <Link href={"/"} className="cursor-pointer">
            <Image
              src={"/Group 5.png"}
              width={144}
              height={200}
              alt="Banner.png"
            />
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <h1 className="font-bold">Create</h1>
          </div>

          <div>
            <h1 className="font-bold text-[#EF4444]">Logout</h1>
          </div>

          <div>
            <Image
              src={"/Frame 70.png"}
              alt="frame.ong"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
