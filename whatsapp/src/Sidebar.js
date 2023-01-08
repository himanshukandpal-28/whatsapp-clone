import React from "react";
import { Avatar } from "@mui/material";
import "./Sidebar.css";
import { DonutLarge } from "@mui/icons-material";
import { Chat, MoreVert } from "@material-ui/icons";

const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar__header">
            <Avatar />
         <div className="sidebar__headerRight">
           <DonutLarge />
           <Chat />
           <MoreVert />    
        </div>   

        </div>
    </div>
)

export default Sidebar