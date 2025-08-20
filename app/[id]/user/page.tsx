import React from "react";
import UserCard from "./Components/UserCard";
import AllStartups from "./Components/AllStartups";

const page = ({ params }: { params: { id: number } }) => {
  const { id } = params;
  return (
    <>
      <div className="Container mt-14 flex gap-32">
        <UserCard />
        <AllStartups params={{ id: id }} />
      </div>
    </>
  );
};

export default page;
