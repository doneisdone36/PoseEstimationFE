import { Stack } from "@mui/material"



function HeaderComponent(): JSX.Element {
    return (
        <Stack direction="row" sx={{ backgroundColor: "#000000", justifyContent: "center"}}>
            <div style={{ padding: "10px" }}>
                <img src="src/assets/synapse-logo-white.svg" alt="logo"/>
            </div>
        </Stack>
    )
}

export default HeaderComponent