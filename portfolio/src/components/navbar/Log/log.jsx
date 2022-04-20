import React from "react";
import LoginButton from "./login";
import LogoutButton from "./logout";
import Profile from "./profile";
import { useAuth0 } from "@auth0/auth0-react";


export default function Log(){
   const {isAuthenticated}= useAuth0();

   
    return(
        <div>
            {
                isAuthenticated?
                (
                    <div>
                        <Profile/>
                        <LogoutButton/>
                    </div>
                ):
                (
                    <div>
                        <LoginButton/>
                    </div>
                )
            }
        </div>
    )
}