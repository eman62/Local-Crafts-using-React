
import "../Styles/about.css"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
const AboutInfo = () => {

    return (
        <>
            <Box sx={{textAlign:"right"}}>
                <Grid container sx={{justifyContent:"spa"}} >
                    <Grid xs={6} sx={{backgroundColor:"#091242"}}>
                        
                    </Grid>
                    <Grid sx={{backgroundColor:"#F4F4F4"}} xs={6}>
                        <Box sx={{padding:"auto",width:"50%",marginTop:"20%",marginBottom:"20%" ,marginLeft:"20%",color:"#1C1F35"}}>
                            <Typography variant="p" sx={{}}> عن موقعنا</Typography>
                            <h1 >نحن نتيح لك فرصة سريعة و
                             سهلة لجعل منزلك متكامل</h1>
                             
                             <Typography variant="p" sx={{color:"#666C89"}}> خملظخبلهس . سشيشيسبليل لييشبسي س شسخملظخبلهس .
                              سشيشيسبليل لييشبسي س شسخملظخبلهس . سشيشيسبليل لييشبسي  شسخملظخبلهس . سشيشيسبليل لييشبسي شس</Typography>

                        </Box>
                        <Box>
                          <Grid container>
                            <Grid>
                                
                            </Grid>

                          </Grid>
                        </Box>
                       
                    </Grid>
                </Grid>

            </Box>




        </>





    )

}

export default AboutInfo;