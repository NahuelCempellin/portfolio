import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "../../../styles/Navbar/logo";

export default function Profile(){
    const{user, isAuthenticated, isLoading}= useAuth0();
    
    if(isLoading){
        return (<div>Loading...</div>)
    }
    return(
        <div>
            {
            isAuthenticated&&(
                <div>
                    <Image src={user.picture} alt={user.name}/>
                </div>
            )
            }
        </div>
    )
}