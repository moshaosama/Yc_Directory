import React from "react";
import UserCard from "@/app/user/[user_id]/Components/UserCard";
import AllStartups from "@/app/user/[user_id]/Components/AllStartups";

const page = ({ params }: { params: { user_id: number } }) => {
    const { user_id } = params;
    return (
        <>
            <div className="Container mt-14 flex gap-32">
                <UserCard />
                <AllStartups params={{ user_id: user_id }} />
            </div>
        </>
    );
};

export default page;
