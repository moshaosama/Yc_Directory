"use client"

import {useForm} from "react-hook-form";
import {authService} from "@/Services/Auth/authService";

export const FormLogin = () => {
    const {register, handleSubmit} = useForm()
    const handleLogin = async (data: any) => {
      await authService.Login(data)
    }
    return (
        <div className="w-full flex justify-center items-center mt-10">
            <form
                className="grid grid-cols-2 gap-6 w-[40%]"
                onSubmit={handleSubmit(handleLogin)}
            >
                <p className="ParentForm">
                    <label className="text-lg font-bold">Email</label>
                    <input
                        type="text"
                        className="InputForm"
                        {...register("email", { required: true })}
                    />
                </p>

                <p className="ParentForm">
                    <label className="text-lg font-bold">Password</label>
                    <input
                        type="password"
                        className="InputForm"
                        {...register("password", { required: true })}
                    />
                </p>

                <p className="col-span-2 w-full flex justify-center">
                    <button type="submit" className="BtnLogin">
                        Login
                    </button>
                </p>
            </form>
        </div>
    );
};
