"use client";

import { signIn } from "next-auth/react"

export function Appbar(){
return (
    <div>
        Sign In Button
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick ={()=> signIn()}>Sign In</button>
        </div>
    </div>
)
}