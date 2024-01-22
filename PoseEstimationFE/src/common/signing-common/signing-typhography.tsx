import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface SigningTyphographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontWeight?: number | string;
    color?: string;
    text?: string;
    type?: SigningTyphographyType
    link?: string;
}

export enum SigningTyphographyType {
    HYPERLINK = "hyperlink",
    TEXT = "text"
}

function SigningTyphographyComponent(props: SigningTyphographyProps): JSX.Element {
    const { variant, fontWeight, color, text, type, link } = props
    const navigate = useNavigate();

    const navigatePage = () => {
        if(link) {
            navigate(link)
        }
    }

    if ( type == SigningTyphographyType.HYPERLINK ) {
        return (
            <Button variant="text" onClick={navigatePage}>
                <Typography 
                variant={variant}
                fontWeight={fontWeight}
                color={color}
                >
                    {text}
                </Typography>
            </Button>
        )
    }
    return (
        <Typography 
            variant={variant}
            fontWeight={fontWeight}
            color={color}
        >
            {text}
        </Typography>
    )
}

const SigningTyphography = React.memo(SigningTyphographyComponent);
export default SigningTyphography