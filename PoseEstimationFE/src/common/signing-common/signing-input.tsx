import { TextField } from "@mui/material"
import React from "react"

interface SigningInputProps {
    id?: string
    label?: string
    value?: string
    type?: SigningInputType
    disabled?: boolean;
    helperText?: string;
    error?: boolean;
    onReset?: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export enum SigningInputType {
    ID = 'id',
    PASSWORD = 'password'
}


function SigningInputComponent(props: SigningInputProps): JSX.Element {
    const { label, type, helperText, error, onChange } = props;

    if( type == SigningInputType.PASSWORD) {
        return (
            <TextField
                type="password"
                error={!!error}
                id="outlined-basic" 
                label={label}
                variant="outlined"
                sx={{ width: "100%" }}
                onChange={onChange}
                helperText={helperText}
            />
        )
    }

    return (
        <TextField 
            error={!!error}
            id="outlined-basic" 
            label={label}
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={onChange}
            helperText={helperText}
        />
    )
}

const SigningInput = React.memo(SigningInputComponent);
export default SigningInput;