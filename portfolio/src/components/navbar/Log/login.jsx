import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonLog } from "../../../styles/Navbar/buttons";


export default function LoginButton(){
   const{loginWithRedirect}= useAuth0();
   
    return(
        <div>
            <ButtonLog onClick={()=>loginWithRedirect()}>Login</ButtonLog>
        </div>
    )
}