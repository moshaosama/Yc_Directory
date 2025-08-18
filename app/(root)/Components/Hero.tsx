import { Search } from "lucide-react";
import React from "react";

interface HeroProps {
  Campaign?: string;
  Title?: string;
  Description?: string;
  isInput?: boolean;
}

const Hero = ({ Campaign, Description, Title, isInput }: HeroProps) => {
  return (
    <>
      <div className="bg-[#EE2B69] h-[40pc] relative flex flex-col gap-7 justify-center items-center ">
        <div className="bg-[#FBE843] p-1 rounded-sm">
          <h1>{Campaign}</h1>
        </div>

        <div className="bg-black w-[65pc] p-4">
          <h1 className="text-white text-5xl font-extrabold text-center">
            {Title}
          </h1>
        </div>

        <div>
          <p className="text-white text-sm">{Description}</p>
        </div>

        {isInput && (
          <form action="" className="mt-10 relative">
            <input
              type="text"
              className="Inputs"
              defaultValue={"Search Startup"}
            />
            <div className="absolute right-5 top-4 bg-black p-2 rounded-full">
              <Search size={20} color="white" />
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default Hero;
