import Form from "next/form";
import Hero from "@/app/Components/Hero";
import {FormSignUp} from "@/app/signup/Components/formsignup";

export default function page () {
    return (
        <>
            <Hero height={"16pc"} Title={"Create a new account"} />
            <FormSignUp/>
        </>
    )
}