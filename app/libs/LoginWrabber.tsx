"use client"


import React, {ReactNode} from "react";
import {useGetUser} from "@/app/Hook/useGetUser";
import Image from "next/image";
import Link from "next/link";

export const LoginWrabber = () => {
    const {Token} = useGetUser()
        return (
            <>
                {
                    Token ? <div className="flex gap-4 items-center">
                        <div>
                            <h1 className="font-bold cursor-pointer">Create</h1>
                        </div>

                        <div>
                            <h1 className="font-bold text-[#EF4444] cursor-pointer">Logout</h1>
                        </div>

                        <div>
                            <Image
                                src={"/Frame 70.png"}
                                alt="frame.ong"
                                width={40}
                                height={40}
                            />
                        </div>
                    </div>: <div className="flex gap-4 items-center">
                        <div className="flex gap-5 items-center">
                            <Link href={"/login"}><h1 className="font-bold cursor-pointer">Login</h1></Link>
                            <Link href={"/signup"}><h1 className="font-bold cursor-pointer">Signup</h1></Link>

                        </div>

                    </div>
                }
            </>
        )
}