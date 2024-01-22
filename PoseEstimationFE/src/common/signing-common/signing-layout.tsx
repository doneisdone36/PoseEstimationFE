import { Grid } from "@mui/material";
import setGridSizes from "../../utils/grid-layout";

interface SignInLayoutComponentProps {
    children: JSX.Element
}

/* 
    xs < 576px
    sm >= 576px
    md >= 768px
    lg >= 992px
    xl >= 1200px
*/

function SigningLayout(props: SignInLayoutComponentProps): JSX.Element {
  const { children } = props;

  const GridSizes = {
    wrapper: {
        //window full scrren xl
        xs: { span: 10 },
        sm: { span: 10 },
        md: { span: 6 },
        lg: { span: 6 },
        xl: { span: 4 },
    },
    form: {
      // window full scrren xl
        xs: { span: 11 },
        sm: { span: 11 },
        md: { span: 11 },
        lg: { span: 11 },
        xl: { span: 11 },
    }
  }

  return (
    <div id="login-wrapper" style={{ display:"flex", height:"100vh", alignItems: "center", justifyContent:"center"}}>
        
        <Grid container item {...setGridSizes(GridSizes.wrapper)} sx={{  
            padding:"20px 28px", border: '1px solid #D0D0D0', 
            borderRadius: '10px', justifyContent:"center", 
            alignItems:"center", boxShadow: 1 }}>
            <Grid item {...setGridSizes(GridSizes.form)}>
              {children}
            </Grid>
        </Grid>
    </div>
  )
}




export default SigningLayout
