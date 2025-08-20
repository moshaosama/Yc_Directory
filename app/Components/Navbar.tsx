import Image from "next/image";
import Link from "next/link";
import React from "react";
import {LoginWrabber} from "@/app/libs/LoginWrabber";

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

        <LoginWrabber/>
      </div>
    </>
  );
};

export default Navbar;
