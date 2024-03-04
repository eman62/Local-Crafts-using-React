import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HomeHeader = () => {
  return (
    <Box sx={{ direction: "rtl" ,color:"black"}}>
      <Box
        sx={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/b970/2aac/6778bc2deae56c05315551cfa7c442be?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JPwZPOb8aLRGdYtF832Fy7YmiLoKd~xZB6tADPWKD~LtfU7LtS0jBPar26QvqI5X9UTE5aMARTzNRaYPAWn9O0w9K~0zi87qsc6IcElgMOpBEdg8q3W3BEy7ndZxCX6D5kbgIKkfVTRua6H5gxZSJn26pUjvLkAJZ0MRFa01m9h8ZMfARUHvlRHL9eQzxsEZJohRdEWini3clJA-y2YNYXM~KkkcYRp8B9egp61I56xCVffbpzoNUofktDNY5X4Y6qIU1qj5vOeHDTpfdhtitnoQ2l4JpHO9CyBtYfjXgpsBmtiOew3Krcx7AT5yoN3Eg93O6904x9yvW8GyeJS~bg__")',
          width: "100vw",
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                textAlign: "right",
                marginRight: "13vw",
                fontSize: "4vw",
              }}
            >
              صناعات محلية وخدمات اكتشف
            </Typography>
            <Typography
              variant="h3"
              sx={{
                textAlign: "right",
                marginBottom: "10px",
                marginRight: "13vw",
                fontSize: "4vw",
              }}
            >
              معنا الإبداع المحلي
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "1em",
              textAlign: "start",
              width: "40vw",
              marginRight: "13vw",
              fontWeight: "700",
            }}
          >
            حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
            حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
            حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
            حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
            حماده بالزنجبيل حماده بالزنجبيل حماده بالزنجبيل
          </Typography>
          <Button
            sx={{
              background:
                "linear-gradient(45deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
              border: 0,
              color: "black",
              height: 48,
              padding: "0 30px",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
              marginRight: "13vw",
              marginTop: "2vh",
              position: "relative",
            }}
          >
            أكتشف أكثر
            <Box
              sx={{
                position: "absolute",
                background: "#DCE4E7",
                width: "20%",
                borderRadius: "50% 0 0",
                bottom: "0",
                height: "40%",
                opacity: "70%",
                right: "0",
              }}
            ></Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeHeader;
