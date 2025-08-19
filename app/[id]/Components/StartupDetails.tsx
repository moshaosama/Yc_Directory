import useGetStartUpByid from "@/app/(root)/Hooks/useGetStartUpByid";
import Image from "next/image";
import React from "react";
import PitchDetails from "./PitchDetails";
import EditorPicks from "./EditorPicks";

const StartupDetails = async ({ params }: { params: { id: number } }) => {
  const data = await useGetStartUpByid(params.id);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <img
          src={data?.[0]?.image_url}
          alt="startUpImage.png"
          className="w-[70pc] object-cover rounded-xl"
        />

        <div className="flex flex-col justify-between w-[65pc] mt-5">
          <div className="flex justify-between items-center">
            <div className=" flex  items-center gap-3">
              <div>
                <img src="/Frame 70.png" alt="frame.png" width={65} />
              </div>

              <div>
                <h1 className="font-semibold">Nipunraj</h1>
                <p className="text-[#9b9b9b]">@nipunrajk</p>
              </div>
            </div>

            <div>
              <h1 className="p-1 flex justify-center items-center text-sm bg-[#ee2b693d] w-14 rounded-full">
                Tech
              </h1>
            </div>
          </div>
          <PitchDetails />
          <EditorPicks />
        </div>
      </div>
    </>
  );
};

export default StartupDetails;
