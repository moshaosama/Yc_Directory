import useGetStartUpByid from "@/app/(root)/Hooks/useGetStartUpByid";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const AllStartups = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const data = await useGetStartUpByid(id as number);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-extrabold">All Startups</h1>

      {Array.isArray(data) &&
        data.map((startup) => (
          <Link
            href={String(`/${startup.id}`)}
            key={startup.id}
            className="StartUpCard"
          >
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
          </Link>
        ))}
    </div>
  );
};

export default AllStartups;
