import React from "react";
import Hero from "../Components/Hero";
import { startUpService } from "@/Services/StartUp/StartupService";
import useGetStartUpByid from "../(root)/Hooks/useGetStartUpByid";
import StartupDetails from "./Components/StartupDetails";

const page = async ({ params }: { params: { id: number } }) => {
  const data = await useGetStartUpByid(params.id);
  return (
    <>
      <Hero
        Campaign={data?.[0].date}
        Title={data?.[0].tag}
        Description={data?.[0].description}
        isInput={false}
        height="20pc"
      />
      <StartupDetails params={{ id: params.id }} />
    </>
  );
};

export default page;
