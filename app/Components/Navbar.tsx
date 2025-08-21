import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import LogoutButton from "./LogoutBtn";

async function Navbar() {
  const cookieStore = cookies();
    const token = (await cookieStore).get("token");
    const user = (await cookieStore).get("user");

  const handleLogout = () => {
    fetch("http://localhost:3003/api/auth/logout", {
      method: "POST",
    }).then((res) => {
      return res.json();
    });
  };

    let parsedUser = null;

    if (user?.value) {
        try {
            parsedUser = JSON.parse(decodeURIComponent(user.value));
        } catch (err) {
            console.error("Error parsing user cookie:", err);
        }
    }


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
            <Link href="/startup/create">
              <h1 className="font-bold cursor-pointer">Create</h1>
            </Link>

            <LogoutButton />
            <Link href={`/user/${parsedUser?.id}`}>
              <Image
                src={"/Frame 70.png"}
                alt="frame.ong"
                width={40}
                height={40}
              />
            </Link>
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
