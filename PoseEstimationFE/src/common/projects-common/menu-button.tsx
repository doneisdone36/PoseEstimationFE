import { Button,  Typography } from "@mui/material"
import React from "react"

interface MenuButtonProps {
    img?: string
    text?: string
    color?: string
}

function MenuButtonComponent(props: MenuButtonProps): JSX.Element {
    const { img, text, color } = props

    return (
        <div id="projects-menu-button" style={{ width: "100%" }}>
            <Button sx={{ 
                "&:hover": { backgroundColor: "#1976D2"}, 
                width: "100%",
                padding: "10px",
                display: "flex",
                justifyContent: "start" 
                }}>
                <img src={img} alt="Upload"/>
                <Typography color={color} sx={{ paddingLeft: "10px"}}>
                    {text}
                </Typography>
            </Button>
        </div>
    )
}

const MenuButton = React.memo(MenuButtonComponent)
export default MenuButton