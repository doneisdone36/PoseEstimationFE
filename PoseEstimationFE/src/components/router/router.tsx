import { Routes, Route } from "react-router-dom"
import InputUserInfoPage from "../page/client/input-user-info/input-user-info-page"
import ProjectsPageComponent from "../page/client/projects/projects-page"



export const ClientRouter : React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<InputUserInfoPage/>} />
      <Route path="/projects" element={<ProjectsPageComponent/>} />
    </Routes>
  )
}