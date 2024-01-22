import { Stack } from "@mui/material";
import React, { useEffect, useRef } from "react";



function ProjectsFormComponent(): JSX.Element {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const constraints = {
            video: {
              width: { ideal: 1920 },  // 원하는 너비
              height: { ideal: 1080 }, // 원하는 높이
            }
          };
    
          navigator.mediaDevices.getUserMedia(constraints)
            .then(stream => {
              if (videoRef.current) {
                videoRef.current.srcObject = stream;
              }
            })
            .catch(err => {
              console.error("카메라 접근에 실패했습니다: ", err);
            });
        }
      }, []);



    return(
        <div style={{ width: "100%", height: "100%"}}>
            <video ref={videoRef} autoPlay playsInline style={{ width: "100%", height:"100%"}}/>
        </div>
    )
}

const ProjectsForm = React.memo(ProjectsFormComponent)
export default ProjectsForm