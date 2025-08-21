import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutBtn";

async function Navbar() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token");

  const handleLogout = () => {
    fetch("http://localhost:3003/api/auth/logout", {
      method: "POST",
    }).then((res) => {
      return res.json();
    });
  };

  return (
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

      <div>
        {token?.value ? (
          <div className="flex gap-4 items-center">
            <div>
              <h1 className="font-bold cursor-pointer">Create</h1>
            </div>

            <LogoutButton />
            <div>
              <Image
                src={"/Frame 70.png"}
                alt="frame.ong"
                width={40}
                height={40}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <div className="flex gap-5 items-center">
              <Link href={"/login"}>
                <h1 className="font-bold cursor-pointer">Login</h1>
              </Link>
              <Link href={"/signup"}>
                <h1 className="font-bold cursor-pointer">Signup</h1>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
