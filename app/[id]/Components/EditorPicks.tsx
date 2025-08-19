import StartUpRender from "@/app/(root)/Components/StartUpRender";
import useGetStartups from "@/app/(root)/Hooks/useGetStartups";
import React from "react";

const EditorPicks = async () => {
  return (
    <>
      <div className="mt-20">
        <h1 className="text-3xl font-bold">Editor Picks</h1>
        <StartUpRender />
      </div>
    </>
  );
};

export default EditorPicks;
