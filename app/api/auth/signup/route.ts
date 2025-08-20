import DB from "@/app/api/db";
import {NextResponse} from "next/server";
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
    const {email, password} = request.body;

    if(!email || !password) {
        NextResponse.json({
            status: 404,
            message: "Please Enter Your Data",
        })
    }

    const PasswordCryption =bcrypt.hash(password, 12);

}