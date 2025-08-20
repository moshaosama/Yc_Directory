import Hero from "@/app/Components/Hero";
import {FormLogin} from "@/app/login/Components/FormLogin";

export default function page () {
    return (
        <>
            <Hero height={"16pc"} Title={"Login"} />
            <FormLogin/>
        </>
    )
}