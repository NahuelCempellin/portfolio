import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLogout } from "../../../styles/Navbar/buttons";

export default function LogoutButton(){
    const {logout}= useAuth0();
   
    return(
        <div>
            <ButtonLogout onClick={()=>logout(({returnTo: window.location.origin}))}>Logout</ButtonLogout>
        </div>
    )
}