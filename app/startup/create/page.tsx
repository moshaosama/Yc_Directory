import Hero from "@/app/Components/Hero";
import FormCreateStartup from "@/app/startup/create/Components/FormCreateStartup";

export default function  page()  {
    return (
        <>
            <Hero height="15pc" Title="Submit Your Startup" />
            <FormCreateStartup/>
        </>
    )
}