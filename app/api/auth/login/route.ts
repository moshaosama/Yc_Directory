import {NextResponse} from "next/server";
import DB from "@/app/api/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export async function POST (request: Request) {
    const body = await request.json();
    const {email, password} = body;

    if (!email || !password) {
        return NextResponse.json({
            status: 400,
            message: "Please enter your data",
        });
    }

    const getuserQuery = "SELECT * FROM user WHERE email = ?"
    const getuserValue = [email];
    const [users] = await DB.query("SELECT * FROM user WHERE email = ?", [email]);

    if (!users || users.length === 0) {
        return NextResponse.json({
            status: 400,
            message: "User not found"
        });
    }

    const user = users[0];

    if(!await bcrypt.compare(password, user.password)) {
        return  NextResponse.json({
            status: 400,
            message: "Please enter your correct password"
        })
    }

    const Token =jwt.sign({email: user.email}, "SECRETPASSWORDTOKEN");

    const response = NextResponse.json({
        status: 200,
        message:"Login Successfully!",
        Token,
        user
    })

    response.cookies.set({
        name: "token",
        value: Token,
        maxAge: 60 *60,
        httpOnly: true,
        sameSite:"strict"
    })

    response.cookies.set({
        name: "user",
        value: JSON.stringify({ id: user.id, email: user.email, userName: user.username }),
        maxAge: 60 * 60,
        httpOnly: true,
        sameSite: "strict"
    });
    return  response;
}