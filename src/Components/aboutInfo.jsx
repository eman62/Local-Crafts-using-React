
import "../Styles/about.css"
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import HomeIcon from '@mui/icons-material/Home';
const AboutInfo = () => {

    return (
        <>
            <Box sx={{ textAlign: "right", marginBottom: "20%", marginTop: "10%" }}>
                <Grid container sx={{}} >
                    <Grid xs={6} sx={{
                        backgroundColor: "#091242", padding: "15%", position: "relative"
                    }}>
                        <Box sx={{ width: "95%", height: "77%", borderRadius: "5%",position: "relative", overflow: "hidden", position: "absolute", top: "15%", left: "18%" }}>
                            <img src="https://s3-alpha-sig.figma.com/img/b723/968d/e3da5c128458512930ebd5485c0c1a62?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HAHddKWXBFjMOCxdJBTTHNtgOJvAFXP7t8YxwXgsCV2RH8Pf1pWaNPL3-ZJfJ2jA3io~Sd~7waaNt79-qz004I21x6ULmbbJds6hXgDHHQQxMrWwyayBpHhaUky84EMtxBE5PztuUA95LKuZrtX4HoyXPBa3fwYZGXZguZX8uEHSJwuKY1~NzdEvALbDeYLjGwPwSzNY37ySCuYp6gfoqjWOwfKBJ6FwZRPG2hj9rEwHIHVuZvEnEW44QbEN~wxICIQYhz7wqoZcR9w6nC~14bzGu2f1bY9wE9--9FTCl0oFgesJshCeRk62c~UaT4GDaLgA9FVxdPt6II8okR4miA__" />
                        </Box>
                        <Box sx={{
                            position: "absolute",
                            top: "83.5%",
                            left: "65%",
                            background: "linear-gradient(90deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
                            padding: "1.7rem",
                            display:"flex",
                            transform: "translate(-50%, -50%)",
                            justifyContent:"space-around",

                        }}>
                            <HomeIcon sx={{color:"white",fontSize:"2.5rem" }}></HomeIcon>
                            <Typography variant="p" sx={{}}>ستجد جميع خدمات التى يحتاجها منزلك</Typography>
                        </Box>
                    </Grid>

                    <Grid sx={{ backgroundColor: "#F4F4F4" }} xs={6}>
                        <Box sx={{ padding: "auto", width: "50%", marginTop: "20%", marginLeft: "20%", color: "#1C1F35" }}>
                            <Typography variant="p" > عن موقعنا</Typography>
                            <h1 >نحن نتيح لك فرصة سريعة و
                                سهلة لجعل منزلك متكامل</h1>

                            <Typography variant="p" sx={{ color: "#666C89" }}> خملظخبلهس . سشيشيسبليل لييشبسي س شسخملظخبلهس .
                                سشيشيسبليل لييشبسي س شسخملظخبلهس . سشيشيسبليل لييشبسي  شسخملظخبلهس . سشيشيسبليل لييشبسي شس</Typography>

                        </Box>
                        <Box mt={5} mb={10} sx={{ marginLeft: "15%" }}>
                            <Grid container >
                                <Grid xs={6}>
                                    <Box sx={{ display: "flex", justifyContent: "" }} >
                                        <Typography mt={2} mr={2} variant="p">فى جميع الاماكن</Typography>
                                        <svg width="40" height="40" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="31.5" cy="31.5" r="31.5" fill="url(#paint0_linear_29_3998)" />
                                            <path d="M32 20C38.6274 20 44 25.3726 44 32C44 38.6274 38.6274 44 32 44C25.3726 44 20 38.6274 20 32C20 25.3726 25.3726 20 32 20Z" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 36H43" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21 28H43" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M32 20C34.2091 20 36 25.3726 36 32C36 38.6274 34.2091 44 32 44C29.7909 44 28 38.6274 28 32C28 25.3726 29.7909 20 32 20Z" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_29_3998" x1="-1.78608" y1="13.65" x2="77.4684" y2="19.2782" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFB629" />
                                                    <stop offset="0.507189" stop-color="#FFDA56" />
                                                    <stop offset="1" stop-color="#FFD7A6" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </Box>
                                </Grid>
                                <Grid xs={6}>
                                    <Box sx={{ display: "flex", justifyContent: "" }} >
                                        <Typography mt={2} mr={2} variant="p">24/7 خدمة</Typography>
                                        <svg width="40" height="40" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="31.5" cy="31.5" r="31.5" fill="url(#paint0_linear_29_4015)" />
                                            <path d="M41 29.143H37.8579C37.4412 29.143 37.0416 29.3035 36.747 29.5893C36.4523 29.8751 36.2868 30.2626 36.2868 30.6668V34.4762C36.2868 34.8804 36.4523 35.2679 36.747 35.5537C37.0416 35.8395 37.4412 36 37.8579 36H39.4289C39.8456 36 40.2452 35.8395 40.5398 35.5537C40.8345 35.2679 41 34.8804 41 34.4762V29.143ZM41 29.143C41 27.9359 40.7536 26.7408 40.275 25.6266C39.7964 24.5123 39.095 23.501 38.2114 22.6511C37.3277 21.8011 36.2793 21.1292 35.1265 20.6743C33.9738 20.2193 32.7396 19.9903 31.4951 20.0003C30.2514 19.9915 29.0183 20.2215 27.8667 20.677C26.7151 21.1326 25.6678 21.8046 24.7852 22.6545C23.9026 23.5043 23.2021 24.5152 22.7241 25.6288C22.246 26.7424 22 27.9367 22 29.143V34.4762C22 34.8804 22.1655 35.2679 22.4602 35.5537C22.7548 35.8395 23.1544 36 23.5711 36H25.1421C25.5588 36 25.9584 35.8395 26.253 35.5537C26.5477 35.2679 26.7132 34.8804 26.7132 34.4762V30.6668C26.7132 30.2626 26.5477 29.8751 26.253 29.5893C25.9584 29.3035 25.5588 29.143 25.1421 29.143H22" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M41 35V37.1429C41 37.9006 40.661 38.6273 40.0575 39.1632C39.454 39.699 38.6356 40 37.7821 40H32" stroke="#1C1F35" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear_29_4015" x1="-1.78608" y1="13.65" x2="77.4684" y2="19.2782" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFB629" />
                                                    <stop offset="0.507189" stop-color="#FFDA56" />
                                                    <stop offset="1" stop-color="#FFD7A6" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </Box>


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