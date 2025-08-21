import React from "react";

const UserCard = () => {
  return (
    <>
      <div className="parentUserCard">
        <img
          src="/Frame%2070.png"
          alt="Frame.png"
          width={200}
          height={200}
          className="object-cover border-4 border-black rounded-full mt-16"
        />

        <h1 className="text-white font-extrabold text-3xl ">@nipunrajk</h1>

        <div>
          <div className="bg-black py-2 -rotate-6 UserCard">ads</div>
          <div className="bg-white py-1 UserCard">
            <h1 className="text-black text-2xl font-bold">Nipunraj</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
