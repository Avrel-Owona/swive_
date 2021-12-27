import React, {useContext} from 'react';
import {userContext} from "../context/userContext";
import Link from "next/link";


const Profile = () => {
    const {user} = useContext(userContext)
    return (
        <div className="flex flex-col">
            {JSON.stringify(user, null, 2)}
            <Link href="/profile_2">
                <button className="p-3 text-white bg-gray-800 m-2 w-max">Profile 2</button>
            </Link>

        </div>
    );
};

export default Profile;