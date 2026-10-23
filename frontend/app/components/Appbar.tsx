"use client";

import { signIn, signOut, useSession } from "next-auth/react"

export function Appbar(){

    const session = useSession();
    
return (
    <div className ="flex justify-between items-center p-4 bg-gray-800 text-white">
        Sign In Button
        <div>
            {session.data?.user && <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=> signOut()}>Log Out</button>}
            {!session.data?.user && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick ={()=> signIn()}>Sign In</button>}
        </div>
    </div>
)
}