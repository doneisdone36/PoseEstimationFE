import { Stack } from "@mui/material"
import MenuButton from "../../../../common/projects-common/menu-button"

function ProjectsLeftMenuComponent(): JSX.Element {
    return(
        <Stack direction="column" spacing={1} >
            <MenuButton img="src/assets/recent.svg" text="카메라 스트림" color="#ffffff"/>
            <MenuButton img="src/assets/person.svg" text="근육량 통계" color="#ffffff"/>
            <MenuButton img="src/assets/paper.svg" text="대시보드" color="#ffffff"/>
        </Stack>
    )
}

export default ProjectsLeftMenuComponent