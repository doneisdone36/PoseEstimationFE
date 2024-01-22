import { Button, Typography } from "@mui/material";
import React from "react";
import SigningTyphography from "./signing-typhography";

interface SigningButtonProps {
    text?: string
    color?: string
    backgroundColor? :string
    type?: "button" | "submit" | "reset"
}

function SigningButtonComponent(props: SigningButtonProps): JSX.Element {
    const { text, color = '#ffffff', backgroundColor = '#03c75a', type= "button" } = props;

    return (
        <Button 
            type={type}
            sx={{ 
                borderRadius: '5px', 
                backgroundColor: { backgroundColor },
                width: "100%",
                color: { color },
            }}>
            <SigningTyphography text={text} variant="h6"/>
        </Button>
    )
}

const SigningButton = React.memo(SigningButtonComponent);
export default SigningButton;