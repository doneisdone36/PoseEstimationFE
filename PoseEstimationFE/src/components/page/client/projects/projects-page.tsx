import { Grid } from "@mui/material"
import ProjectsLeftMenuComponent from "./projects-letf-menu";
import ProjectsForm from "./projects-form";
import setGridSizes from "../../../../utils/grid-layout";
import Header from "../header/header";


function ProjectsPageComponent(): JSX.Element {
    const GridSizes = {
        wrapper: {
            xs: { span: 12 },
            sm: { span: 12 },
            md: { span: 12 },
            lg: { span: 12 },
            xl: { span: 12 },
        },
        form: {
            xs: { span: 2 },
            sm: { span: 2 },
            md: { span: 2 },
            lg: { span: 2 },
            xl: { span: 2 },
        },
        main: {
            xs: { span: 10 },
            sm: { span: 10 },
            md: { span: 10 },
            lg: { span: 10 },
            xl: { span: 10 },
        }
    }

    return (
            <div style={{ width:"100%", height:"100%" }}>
                <Header/>
                    <Grid container item {...setGridSizes(GridSizes.wrapper)}>
                        <Grid item {...setGridSizes(GridSizes.form) }sx={{ backgroundColor: "#515151"}} height="100vh">
                            <ProjectsLeftMenuComponent/>
                        </Grid>
                        <Grid item {...setGridSizes(GridSizes.main) }sx={{ backgroundColor: "#F3F3F3"}} height="100vh">
                            <ProjectsForm/>
                        </Grid>
                    </Grid>
                    
            </div>
    )
}

export default ProjectsPageComponent