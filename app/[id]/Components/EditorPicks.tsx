import StartUpRender from "@/app/(root)/Components/StartUpRender";
import useGetStartups from "@/app/(root)/Hooks/useGetStartups";
import { Eye } from "lucide-react";
import React from "react";

const EditorPicks = async () => {
  const data = await useGetStartups();
  const idOne = Math.floor(Math.random() * data.length);
  const idTwo = Math.floor(Math.random() * data.length);

  const start = Math.min(idOne, idTwo);
  const end = Math.max(idOne, idTwo) + 1;

  return (
    <>
      <div className="mt-20">
        <h1 className="text-3xl font-bold">Editor Picks</h1>

        <div className="grid gap-4 grid-cols-3 mt-10">
          {data
            .slice(start, end)
            .slice(0, 3)
            .map((startup) => (
              <div key={startup.id} className="StartUpCard">
                <div className="flex justify-between mx-3">
                  <h1>{startup.date}</h1>
                  <div className="flex items-center gap-1">
                    <Eye size={25} color="#EE2B69" />
                    <h1>{startup.view === null ? 0 : startup.view}</h1>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1>{startup.name}</h1>
                      <h1 className="text-xl font-bold">{startup.tag}</h1>
                    </div>
                    <div>
                      <img
                        src={"/Frame 70.png"}
                        alt="Frame.png"
                        width={50}
                        height={50}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[#777777]">{startup.description}</p>
                    <img
                      src={startup.image_url}
                      alt="startupImage.png"
                      width={"100%"}
                      className="h-60 object-cover"
                    />

                    <div className="flex justify-between">
                      <h1>{startup.tag}</h1>

                      <button className="bg-black text-white font-semibold w-20 py-2 rounded-xl cursor-pointer">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditorPicks;
