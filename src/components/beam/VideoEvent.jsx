import React from "react";


export const VideoEvent = ({event}) =>{
    const{nombre,user}=event;
    
    return(
        <div>
            <span>{nombre}</span>
            <strong>{user.name}</strong>
        </div>
    )
}