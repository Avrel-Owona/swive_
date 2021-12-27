import React, {useContext} from 'react';
import {userContext} from "../context/userContext";
import Link from "next/link";
import {login} from "../utils/login";

const Profile2 = () => {
    const {user, setUser} = useContext(userContext)
    return (
        <div className="flex flex-col">
            {JSON.stringify(user, null, 2)}
            {user ? <button className='p-3 bg-gray-800 text-white mt-20 w-max' onClick={()=>{
                setUser(null)
            }
            }>Logout</button> : <button className='p-3 bg-gray-800 text-white mt-20 w-max' onClick={async ()=>{
                const user = await login()
                setUser(user)
            }}>Login</button>}
            <Link href="/profile">
                <button className="p-3 text-white bg-gray-800 m-2 w-max">Profile</button>
            </Link>
        </div>
    );
};

export default Profile2;