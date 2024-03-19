import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import LoginIcon from "@mui/icons-material/Login";
import HighlightAltIcon from "@mui/icons-material/HighlightAlt";

const OrderServiceSteps = ({ onButtonClick }) => {
  return (
    <Box mb={50} sx={{ height: "40vh", backgroundColor: "white" ,}}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography
          sx={{ fontSize: {xs:"1.2rem",md:"2rem"}, marginRight: "4px",fontFamily: "Rubik", marginBottom: "10px", direction:"rtl" }}
        >
          كيف يمكنك طلب خدمه علي لوكال كرافت
        </Typography>
        <svg
          width="4"
          height="32"
          viewBox="0 0 4 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="4" height="32" fill="url(#paint0_linear_49_2162)" />
          <defs>
            <linearGradient
              id="paint0_linear_49_2162"
              x1="-0.113402"
              y1="6.93333"
              x2="4.94361"
              y2="6.97822"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFB629" />
              <stop offset="0.507189" stop-color="#FFDA56" />
              <stop offset="1" stop-color="#FFD7A6" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
      <Box
        sx={{
          background:
            "linear-gradient(90deg, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)",
          height: "60vh",
          paddingTop: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ marginLeft: "10%" }}>
          <Grid item xs={6} lg={1.5} sx={{mb:{xs:"4px",xs:"0px"}}}>
            <Box
              sx={{
                background: "linear-gradient(90deg, #091242 0%, #1F2A69 100%)",
                borderRadius: "20% 20% 20% 0",
                width: "40%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px auto",
              }}
            >
              <CheckCircleIcon sx={{ color: "white" }}></CheckCircleIcon>
            </Box>
            <Typography
              sx={{
                color: "#091242",
                fontWeight: "bold",
                fontSize: "1em",
                textAlign: "center",
                fontFamily:"Rubik"
              }}
            >
              الخطوه الرابعه
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize:{xs:".6rem",md:"1rem",},fontFamily:"Rubik"}}>
              انتظر مكالمه من البائع
            </Typography>
          </Grid>
          <Grid
            item
            mt={5}
            lg={1.5}
           
            sx={{ display:{md:"block",xs:"none"} , alignItems: "center" }}
          >
            <svg
              width="10vw"
              height="32"
              viewBox="0 0 250 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M248.726 3.35649C249.475 3.00306 249.796 2.10916 249.443 1.3599C249.089 0.610651 248.195 0.289772 247.446 0.643202L248.726 3.35649ZM0.0859375 1.99984L10.0291 16.182L17.3396 0.479937L0.0859375 1.99984ZM247.446 0.643202C246.573 1.05483 245.698 1.46223 244.821 1.86537L246.073 4.59138C246.96 4.18404 247.844 3.7724 248.726 3.35649L247.446 0.643202ZM239.534 4.23049C237.765 5.00046 235.987 5.75327 234.201 6.48873L235.342 9.26293C237.148 8.51981 238.944 7.75914 240.731 6.98115L239.534 4.23049ZM228.823 8.63914C227.025 9.33717 225.218 10.0178 223.403 10.6807L224.432 13.4986C226.266 12.8288 228.092 12.1411 229.908 11.4358L228.823 8.63914ZM217.943 12.6127C216.118 13.2376 214.286 13.8448 212.445 14.4341L213.36 17.2912C215.22 16.6958 217.071 16.0822 218.915 15.4508L217.943 12.6127ZM206.911 16.1444C205.063 16.6951 203.208 17.2279 201.345 17.7425L202.143 20.6342C204.026 20.1142 205.901 19.5759 207.768 19.0194L206.911 16.1444ZM195.746 19.2284C193.878 19.7041 192.002 20.1617 190.12 20.6008L190.802 23.5224C192.704 23.0786 194.599 22.6163 196.486 22.1356L195.746 19.2284ZM184.466 21.8601C182.58 22.2601 180.688 22.6418 178.789 23.0049L179.353 25.9515C181.271 25.5846 183.183 25.1989 185.088 24.7947L184.466 21.8601ZM173.089 24.0357C171.189 24.3596 169.283 24.6649 167.371 24.9516L167.815 27.9185C169.748 27.6288 171.674 27.3203 173.593 26.993L173.089 24.0357ZM161.634 25.753C159.723 26.0005 157.806 26.2294 155.883 26.4394L156.209 29.4217C158.151 29.2095 160.088 28.9782 162.019 28.7281L161.634 25.753ZM150.119 27.011C148.2 27.182 146.275 27.3344 144.344 27.4678L144.551 30.4607C146.501 30.3259 148.446 30.172 150.386 29.9991L150.119 27.011ZM138.563 27.8099C136.638 27.9047 134.709 27.9806 132.774 28.0377L132.863 31.0364C134.817 30.9788 136.766 30.902 138.711 30.8062L138.563 27.8099ZM126.984 28.1513C126.019 28.1608 125.053 28.1655 124.086 28.1655V31.1655C125.063 31.1655 126.038 31.1607 127.013 31.1512L126.984 28.1513ZM124.086 28.1655C123.119 28.1655 122.153 28.1608 121.188 28.1513L121.159 31.1512C122.133 31.1607 123.109 31.1655 124.086 31.1655V28.1655ZM115.398 28.0377C113.463 27.9806 111.533 27.9047 109.609 27.8099L109.461 30.8062C111.406 30.902 113.355 30.9788 115.309 31.0364L115.398 28.0377ZM103.828 27.4678C101.897 27.3344 99.9722 27.182 98.0525 27.011L97.7862 29.9991C99.7257 30.172 101.671 30.3259 103.621 30.4607L103.828 27.4678ZM92.289 26.4394C90.3662 26.2294 88.4491 26.0005 86.5378 25.753L86.1525 28.7281C88.0836 28.9782 90.0206 29.2095 91.9632 29.4217L92.289 26.4394ZM80.8013 24.9516C78.8889 24.6649 76.9827 24.3596 75.0828 24.0357L74.5786 26.993C76.4983 27.3203 78.4243 27.6288 80.3565 27.9185L80.8013 24.9516ZM69.3827 23.0049C67.4839 22.6417 65.5916 22.2601 63.7061 21.8601L63.0835 24.7947C64.9886 25.1989 66.9006 25.5846 68.8193 25.9515L69.3827 23.0049ZM58.0519 20.6008C56.1694 20.1617 54.294 19.7041 52.4258 19.2284L51.6855 22.1356C53.5732 22.6163 55.4682 23.0786 57.3703 23.5224L58.0519 20.6008ZM46.8272 17.7425C44.9641 17.2279 43.1086 16.6951 41.2608 16.1444L40.4039 19.0194C42.271 19.5759 44.1459 20.1142 46.0285 20.6342L46.8272 17.7425ZM35.7269 14.434C33.8863 13.8448 32.0536 13.2376 30.2292 12.6127L29.2571 15.4508C31.1006 16.0822 32.9523 16.6958 34.8122 17.2912L35.7269 14.434ZM24.769 10.6807C22.9538 10.0178 21.1471 9.33716 19.3491 8.63913L18.2634 11.4358C20.0801 12.1411 21.9057 12.8288 23.7399 13.4986L24.769 10.6807ZM13.9712 6.48872C12.1844 5.75327 10.4065 5.00045 8.63783 4.23048L7.44038 6.98114C9.22751 7.75913 11.0239 8.5198 12.8294 9.26292L13.9712 6.48872ZM248.726 3.35649C249.475 3.00306 249.796 2.10916 249.443 1.3599C249.089 0.610651 248.195 0.289772 247.446 0.643202L248.726 3.35649ZM0.0859375 1.99984L10.0291 16.182L17.3396 0.479937L0.0859375 1.99984ZM247.446 0.643202C246.573 1.05483 245.698 1.46223 244.821 1.86537L246.073 4.59138C246.96 4.18404 247.844 3.7724 248.726 3.35649L247.446 0.643202ZM239.534 4.23049C237.765 5.00046 235.987 5.75327 234.201 6.48873L235.342 9.26293C237.148 8.51981 238.944 7.75914 240.731 6.98115L239.534 4.23049ZM228.823 8.63914C227.025 9.33717 225.218 10.0178 223.403 10.6807L224.432 13.4986C226.266 12.8288 228.092 12.1411 229.908 11.4358L228.823 8.63914ZM217.943 12.6127C216.118 13.2376 214.286 13.8448 212.445 14.4341L213.36 17.2912C215.22 16.6958 217.071 16.0822 218.915 15.4508L217.943 12.6127ZM206.911 16.1444C205.063 16.6951 203.208 17.2279 201.345 17.7425L202.143 20.6342C204.026 20.1142 205.901 19.5759 207.768 19.0194L206.911 16.1444ZM195.746 19.2284C193.878 19.7041 192.002 20.1617 190.12 20.6008L190.802 23.5224C192.704 23.0786 194.599 22.6163 196.486 22.1356L195.746 19.2284ZM184.466 21.8601C182.58 22.2601 180.688 22.6418 178.789 23.0049L179.353 25.9515C181.271 25.5846 183.183 25.1989 185.088 24.7947L184.466 21.8601ZM173.089 24.0357C171.189 24.3596 169.283 24.6649 167.371 24.9516L167.815 27.9185C169.748 27.6288 171.674 27.3203 173.593 26.993L173.089 24.0357ZM161.634 25.753C159.723 26.0005 157.806 26.2294 155.883 26.4394L156.209 29.4217C158.151 29.2095 160.088 28.9782 162.019 28.7281L161.634 25.753ZM150.119 27.011C148.2 27.182 146.275 27.3344 144.344 27.4678L144.551 30.4607C146.501 30.3259 148.446 30.172 150.386 29.9991L150.119 27.011ZM138.563 27.8099C136.638 27.9047 134.709 27.9806 132.774 28.0377L132.863 31.0364C134.817 30.9788 136.766 30.902 138.711 30.8062L138.563 27.8099ZM126.984 28.1513C126.019 28.1608 125.053 28.1655 124.086 28.1655V31.1655C125.063 31.1655 126.038 31.1607 127.013 31.1512L126.984 28.1513ZM124.086 28.1655C123.119 28.1655 122.153 28.1608 121.188 28.1513L121.159 31.1512C122.133 31.1607 123.109 31.1655 124.086 31.1655V28.1655ZM115.398 28.0377C113.463 27.9806 111.533 27.9047 109.609 27.8099L109.461 30.8062C111.406 30.902 113.355 30.9788 115.309 31.0364L115.398 28.0377ZM103.828 27.4678C101.897 27.3344 99.9722 27.182 98.0525 27.011L97.7862 29.9991C99.7257 30.172 101.671 30.3259 103.621 30.4607L103.828 27.4678ZM92.289 26.4394C90.3662 26.2294 88.4491 26.0005 86.5378 25.753L86.1525 28.7281C88.0836 28.9782 90.0206 29.2095 91.9632 29.4217L92.289 26.4394ZM80.8013 24.9516C78.8889 24.6649 76.9827 24.3596 75.0828 24.0357L74.5786 26.993C76.4983 27.3203 78.4243 27.6288 80.3565 27.9185L80.8013 24.9516ZM69.3827 23.0049C67.4839 22.6417 65.5916 22.2601 63.7061 21.8601L63.0835 24.7947C64.9886 25.1989 66.9006 25.5846 68.8193 25.9515L69.3827 23.0049ZM58.0519 20.6008C56.1694 20.1617 54.294 19.7041 52.4258 19.2284L51.6855 22.1356C53.5732 22.6163 55.4682 23.0786 57.3703 23.5224L58.0519 20.6008ZM46.8272 17.7425C44.9641 17.2279 43.1086 16.6951 41.2608 16.1444L40.4039 19.0194C42.271 19.5759 44.1459 20.1142 46.0285 20.6342L46.8272 17.7425ZM35.7269 14.434C33.8863 13.8448 32.0536 13.2376 30.2292 12.6127L29.2571 15.4508C31.1006 16.0822 32.9523 16.6958 34.8122 17.2912L35.7269 14.434ZM24.769 10.6807C22.9538 10.0178 21.1471 9.33716 19.3491 8.63913L18.2634 11.4358C20.0801 12.1411 21.9057 12.8288 23.7399 13.4986L24.769 10.6807ZM13.9712 6.48872C12.1844 5.75327 10.4065 5.00045 8.63783 4.23048L7.44038 6.98114C9.22751 7.75913 11.0239 8.5198 12.8294 9.26292L13.9712 6.48872Z"
                fill="black"
              />
            </svg>
          </Grid>
          <Grid item xs={6} lg={1.5} sx={{mb:{xs:"4px",xs:"0px"}}}>
            <Box
              sx={{
                background: "linear-gradient(90deg, #091242 0%, #1F2A69 100%)",
                borderRadius: "20% 20% 20% 0",
                width:  "40%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px auto ",
              }}
            >
              <AdsClickIcon sx={{ color: "white" }}></AdsClickIcon>
            </Box>
            <Typography
              sx={{
                color: "#091242",
                fontWeight: "bold",
                fontSize: "1em",
                textAlign: "center",
                fontFamily:"Rubik"
              }}
            >
              الخطوه الثالثه
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize:{xs:".6rem",md:"1rem",},fontFamily:"Rubik"}}>
              اضغط علي زر تواصل مع البائع
            </Typography>
          </Grid>
          {/*            */}
          <Grid
            item
            lg={1.5}
            sx={{ display:{md:"block",xs:"none"}, alignItems: "start" }}
            
          >
            <svg
              width="10vw"
              height="32"
              viewBox="0 0 250 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M248.726 28.309C249.475 28.6625 249.796 29.5564 249.443 30.3056C249.089 31.0549 248.195 31.3758 247.446 31.0223L248.726 28.309ZM0.0859375 29.6657L10.0291 15.4835L17.3396 31.1856L0.0859375 29.6657ZM247.446 31.0223C246.573 30.6107 245.698 30.2033 244.821 29.8002L246.073 27.0742C246.96 27.4815 247.844 27.8931 248.726 28.309L247.446 31.0223ZM239.534 27.435C237.765 26.6651 235.987 25.9123 234.201 25.1768L235.342 22.4026C237.148 23.1457 238.944 23.9064 240.731 24.6844L239.534 27.435ZM228.823 23.0264C227.025 22.3284 225.218 21.6478 223.403 20.9848L224.432 18.1669C226.266 18.8367 228.092 19.5244 229.908 20.2298L228.823 23.0264ZM217.943 19.0528C216.118 18.4279 214.286 17.8207 212.445 17.2315L213.36 14.3743C215.22 14.9698 217.071 15.5833 218.915 16.2147L217.943 19.0528ZM206.911 15.5212C205.063 14.9704 203.208 14.4376 201.345 13.923L202.143 11.0313C204.026 11.5513 205.901 12.0897 207.768 12.6461L206.911 15.5212ZM195.746 12.4371C193.878 11.9614 192.002 11.5039 190.12 11.0647L190.802 8.14313C192.704 8.58689 194.599 9.04922 196.486 9.5299L195.746 12.4371ZM184.466 9.80547C182.58 9.40545 180.688 9.02378 178.789 8.66065L179.353 5.71405C181.271 6.08095 183.183 6.4666 185.088 6.87079L184.466 9.80547ZM173.089 7.62987C171.189 7.30597 169.283 7.00058 167.371 6.71389L167.815 3.74704C169.748 4.03671 171.674 4.34527 173.593 4.67254L173.089 7.62987ZM161.634 5.91255C159.723 5.66504 157.806 5.43616 155.883 5.22611L156.209 2.24385C158.151 2.45607 160.088 2.68732 162.019 2.9374L161.634 5.91255ZM150.119 4.65457C148.2 4.48349 146.275 4.33115 144.344 4.19772L144.551 1.20486C146.501 1.33966 148.446 1.49357 150.386 1.66641L150.119 4.65457ZM138.563 3.85565C136.638 3.76087 134.709 3.68488 132.774 3.62787L132.863 0.629172C134.817 0.686767 136.766 0.763531 138.711 0.859285L138.563 3.85565ZM126.984 3.5142C126.019 3.50474 125.053 3.5 124.086 3.5V0.5C125.063 0.5 126.038 0.504789 127.013 0.514344L126.984 3.5142ZM124.086 3.5C123.119 3.5 122.153 3.50474 121.188 3.5142L121.159 0.514345C122.133 0.504789 123.109 0.5 124.086 0.5V3.5ZM115.398 3.62787C113.463 3.68488 111.533 3.76087 109.609 3.85565L109.461 0.859286C111.406 0.763532 113.355 0.686767 115.309 0.629173L115.398 3.62787ZM103.828 4.19772C101.897 4.33115 99.9722 4.48349 98.0525 4.65457L97.7862 1.66641C99.7257 1.49357 101.671 1.33966 103.621 1.20486L103.828 4.19772ZM92.289 5.22611C90.3662 5.43616 88.4491 5.66504 86.5378 5.91256L86.1525 2.9374C88.0836 2.68732 90.0206 2.45607 91.9632 2.24385L92.289 5.22611ZM80.8013 6.71389C78.8889 7.00058 76.9827 7.30597 75.0828 7.62988L74.5786 4.67255C76.4983 4.34527 78.4243 4.03671 80.3565 3.74705L80.8013 6.71389ZM69.3827 8.66066C67.4839 9.02378 65.5916 9.40545 63.7061 9.80547L63.0835 6.8708C64.9886 6.4666 66.9006 6.08095 68.8193 5.71405L69.3827 8.66066ZM58.0519 11.0647C56.1694 11.5039 54.294 11.9614 52.4258 12.4371L51.6855 9.5299C53.5732 9.04922 55.4682 8.5869 57.3703 8.14313L58.0519 11.0647ZM46.8272 13.923C44.9641 14.4376 43.1086 14.9704 41.2608 15.5212L40.4039 12.6461C42.271 12.0897 44.1459 11.5513 46.0285 11.0313L46.8272 13.923ZM35.7269 17.2315C33.8863 17.8208 32.0536 18.4279 30.2292 19.0529L29.2571 16.2147C31.1006 15.5833 32.9523 14.9698 34.8122 14.3743L35.7269 17.2315ZM24.769 20.9848C22.9538 21.6478 21.1471 22.3284 19.3491 23.0264L18.2634 20.2298C20.0801 19.5244 21.9057 18.8367 23.7399 18.1669L24.769 20.9848ZM13.9712 25.1768C12.1844 25.9123 10.4065 26.6651 8.63783 27.435L7.44038 24.6844C9.22751 23.9064 11.0239 23.1457 12.8294 22.4026L13.9712 25.1768ZM248.726 28.309C249.475 28.6625 249.796 29.5564 249.443 30.3056C249.089 31.0549 248.195 31.3758 247.446 31.0223L248.726 28.309ZM0.0859375 29.6657L10.0291 15.4835L17.3396 31.1856L0.0859375 29.6657ZM247.446 31.0223C246.573 30.6107 245.698 30.2033 244.821 29.8002L246.073 27.0742C246.96 27.4815 247.844 27.8931 248.726 28.309L247.446 31.0223ZM239.534 27.435C237.765 26.6651 235.987 25.9123 234.201 25.1768L235.342 22.4026C237.148 23.1457 238.944 23.9064 240.731 24.6844L239.534 27.435ZM228.823 23.0264C227.025 22.3284 225.218 21.6478 223.403 20.9848L224.432 18.1669C226.266 18.8367 228.092 19.5244 229.908 20.2298L228.823 23.0264ZM217.943 19.0528C216.118 18.4279 214.286 17.8207 212.445 17.2315L213.36 14.3743C215.22 14.9698 217.071 15.5833 218.915 16.2147L217.943 19.0528ZM206.911 15.5212C205.063 14.9704 203.208 14.4376 201.345 13.923L202.143 11.0313C204.026 11.5513 205.901 12.0897 207.768 12.6461L206.911 15.5212ZM195.746 12.4371C193.878 11.9614 192.002 11.5039 190.12 11.0647L190.802 8.14313C192.704 8.58689 194.599 9.04922 196.486 9.5299L195.746 12.4371ZM184.466 9.80547C182.58 9.40545 180.688 9.02378 178.789 8.66065L179.353 5.71405C181.271 6.08095 183.183 6.4666 185.088 6.87079L184.466 9.80547ZM173.089 7.62987C171.189 7.30597 169.283 7.00058 167.371 6.71389L167.815 3.74704C169.748 4.03671 171.674 4.34527 173.593 4.67254L173.089 7.62987ZM161.634 5.91255C159.723 5.66504 157.806 5.43616 155.883 5.22611L156.209 2.24385C158.151 2.45607 160.088 2.68732 162.019 2.9374L161.634 5.91255ZM150.119 4.65457C148.2 4.48349 146.275 4.33115 144.344 4.19772L144.551 1.20486C146.501 1.33966 148.446 1.49357 150.386 1.66641L150.119 4.65457ZM138.563 3.85565C136.638 3.76087 134.709 3.68488 132.774 3.62787L132.863 0.629172C134.817 0.686767 136.766 0.763531 138.711 0.859285L138.563 3.85565ZM126.984 3.5142C126.019 3.50474 125.053 3.5 124.086 3.5V0.5C125.063 0.5 126.038 0.504789 127.013 0.514344L126.984 3.5142ZM124.086 3.5C123.119 3.5 122.153 3.50474 121.188 3.5142L121.159 0.514345C122.133 0.504789 123.109 0.5 124.086 0.5V3.5ZM115.398 3.62787C113.463 3.68488 111.533 3.76087 109.609 3.85565L109.461 0.859286C111.406 0.763532 113.355 0.686767 115.309 0.629173L115.398 3.62787ZM103.828 4.19772C101.897 4.33115 99.9722 4.48349 98.0525 4.65457L97.7862 1.66641C99.7257 1.49357 101.671 1.33966 103.621 1.20486L103.828 4.19772ZM92.289 5.22611C90.3662 5.43616 88.4491 5.66504 86.5378 5.91256L86.1525 2.9374C88.0836 2.68732 90.0206 2.45607 91.9632 2.24385L92.289 5.22611ZM80.8013 6.71389C78.8889 7.00058 76.9827 7.30597 75.0828 7.62988L74.5786 4.67255C76.4983 4.34527 78.4243 4.03671 80.3565 3.74705L80.8013 6.71389ZM69.3827 8.66066C67.4839 9.02378 65.5916 9.40545 63.7061 9.80547L63.0835 6.8708C64.9886 6.4666 66.9006 6.08095 68.8193 5.71405L69.3827 8.66066ZM58.0519 11.0647C56.1694 11.5039 54.294 11.9614 52.4258 12.4371L51.6855 9.5299C53.5732 9.04922 55.4682 8.5869 57.3703 8.14313L58.0519 11.0647ZM46.8272 13.923C44.9641 14.4376 43.1086 14.9704 41.2608 15.5212L40.4039 12.6461C42.271 12.0897 44.1459 11.5513 46.0285 11.0313L46.8272 13.923ZM35.7269 17.2315C33.8863 17.8208 32.0536 18.4279 30.2292 19.0529L29.2571 16.2147C31.1006 15.5833 32.9523 14.9698 34.8122 14.3743L35.7269 17.2315ZM24.769 20.9848C22.9538 21.6478 21.1471 22.3284 19.3491 23.0264L18.2634 20.2298C20.0801 19.5244 21.9057 18.8367 23.7399 18.1669L24.769 20.9848ZM13.9712 25.1768C12.1844 25.9123 10.4065 26.6651 8.63783 27.435L7.44038 24.6844C9.22751 23.9064 11.0239 23.1457 12.8294 22.4026L13.9712 25.1768Z"
                fill="black"
              />
            </svg>
          </Grid>
          <Grid item xs={6} lg={1.5}>
            <Box
              sx={{
                background: "linear-gradient(90deg, #091242 0%, #1F2A69 100%)",
                borderRadius: "20% 20% 20% 0",
                width: " 40%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px auto",
              }}
            >
              <HighlightAltIcon sx={{ color: "white" }}></HighlightAltIcon>
            </Box>
            <Typography
              sx={{
                color: "#091242",
                fontWeight: "bold",
                fontSize: "1em",
                textAlign: "center",
                fontFamily:"Rubik"
              }}
            >
              الخطوه الثانيه
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize:{xs:".6rem",md:"1rem",},fontFamily:"Rubik"}}>
              اضغط علي الخدمه التي تريدها
            </Typography>
          </Grid>
          <Grid
            item
            mt={5}
            lg={1.5}
            sx={{display:{md:"block",xs:"none"}, alignItems: "center" }}
            
          >
            <svg
              width="10vw"
              height="32"
              viewBox="0 0 250 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M248.726 3.69096C249.475 3.33753 249.796 2.44363 249.443 1.69438C249.089 0.945124 248.195 0.624245 247.446 0.977674L248.726 3.69096ZM0.0859375 2.33432L10.0291 16.5165L17.3396 0.814409L0.0859375 2.33432ZM247.446 0.977674C246.573 1.3893 245.698 1.7967 244.821 2.19984L246.073 4.92585C246.96 4.51851 247.844 4.10687 248.726 3.69096L247.446 0.977674ZM239.534 4.56497C237.765 5.33493 235.987 6.08775 234.201 6.8232L235.342 9.5974C237.148 8.85428 238.944 8.09361 240.731 7.31562L239.534 4.56497ZM228.823 8.97361C227.025 9.67164 225.218 10.3522 223.403 11.0152L224.432 13.8331C226.266 13.1633 228.092 12.4756 229.908 11.7702L228.823 8.97361ZM217.943 12.9472C216.118 13.5721 214.286 14.1793 212.445 14.7685L213.36 17.6257C215.22 17.0302 217.071 16.4167 218.915 15.7853L217.943 12.9472ZM206.911 16.4788C205.063 17.0296 203.208 17.5624 201.345 18.077L202.143 20.9687C204.026 20.4487 205.901 19.9103 207.768 19.3539L206.911 16.4788ZM195.746 19.5629C193.878 20.0386 192.002 20.4961 190.12 20.9353L190.802 23.8569C192.704 23.4131 194.599 22.9508 196.486 22.4701L195.746 19.5629ZM184.466 22.1945C182.58 22.5946 180.688 22.9762 178.789 23.3393L179.353 26.286C181.271 25.919 183.183 25.5334 185.088 25.1292L184.466 22.1945ZM173.089 24.3701C171.189 24.694 169.283 24.9994 167.371 25.2861L167.815 28.253C169.748 27.9633 171.674 27.6547 173.593 27.3275L173.089 24.3701ZM161.634 26.0874C159.723 26.335 157.806 26.5638 155.883 26.7739L156.209 29.7562C158.151 29.5439 160.088 29.3127 162.019 29.0626L161.634 26.0874ZM150.119 27.3454C148.2 27.5165 146.275 27.6689 144.344 27.8023L144.551 30.7951C146.501 30.6603 148.446 30.5064 150.386 30.3336L150.119 27.3454ZM138.563 28.1443C136.638 28.2391 134.709 28.3151 132.774 28.3721L132.863 31.3708C134.817 31.3132 136.766 31.2365 138.711 31.1407L138.563 28.1443ZM126.984 28.4858C126.019 28.4953 125.053 28.5 124.086 28.5V31.5C125.063 31.5 126.038 31.4952 127.013 31.4857L126.984 28.4858ZM124.086 28.5C123.119 28.5 122.153 28.4953 121.188 28.4858L121.159 31.4857C122.133 31.4952 123.109 31.5 124.086 31.5V28.5ZM115.398 28.3721C113.463 28.3151 111.533 28.2391 109.609 28.1443L109.461 31.1407C111.406 31.2365 113.355 31.3132 115.309 31.3708L115.398 28.3721ZM103.828 27.8023C101.897 27.6689 99.9722 27.5165 98.0525 27.3454L97.7862 30.3336C99.7257 30.5064 101.671 30.6603 103.621 30.7951L103.828 27.8023ZM92.289 26.7739C90.3662 26.5638 88.4491 26.335 86.5378 26.0874L86.1525 29.0626C88.0836 29.3127 90.0206 29.5439 91.9632 29.7561L92.289 26.7739ZM80.8013 25.2861C78.8889 24.9994 76.9827 24.694 75.0828 24.3701L74.5786 27.3275C76.4983 27.6547 78.4243 27.9633 80.3565 28.253L80.8013 25.2861ZM69.3827 23.3393C67.4839 22.9762 65.5916 22.5946 63.7061 22.1945L63.0835 25.1292C64.9886 25.5334 66.9006 25.919 68.8193 26.2859L69.3827 23.3393ZM58.0519 20.9353C56.1694 20.4961 54.294 20.0386 52.4258 19.5629L51.6855 22.4701C53.5732 22.9508 55.4682 23.4131 57.3703 23.8569L58.0519 20.9353ZM46.8272 18.077C44.9641 17.5624 43.1086 17.0296 41.2608 16.4788L40.4039 19.3539C42.271 19.9103 44.1459 20.4487 46.0285 20.9687L46.8272 18.077ZM35.7269 14.7685C33.8863 14.1792 32.0536 13.5721 30.2292 12.9471L29.2571 15.7853C31.1006 16.4167 32.9523 17.0302 34.8122 17.6257L35.7269 14.7685ZM24.769 11.0152C22.9538 10.3522 21.1471 9.67164 19.3491 8.9736L18.2634 11.7702C20.0801 12.4756 21.9057 13.1633 23.7399 13.8331L24.769 11.0152ZM13.9712 6.82319C12.1844 6.08774 10.4065 5.33492 8.63783 4.56496L7.44038 7.31561C9.22751 8.09361 11.0239 8.85427 12.8294 9.59739L13.9712 6.82319ZM248.726 3.69096C249.475 3.33753 249.796 2.44363 249.443 1.69438C249.089 0.945124 248.195 0.624245 247.446 0.977674L248.726 3.69096ZM0.0859375 2.33432L10.0291 16.5165L17.3396 0.814409L0.0859375 2.33432ZM247.446 0.977674C246.573 1.3893 245.698 1.7967 244.821 2.19984L246.073 4.92585C246.96 4.51851 247.844 4.10687 248.726 3.69096L247.446 0.977674ZM239.534 4.56497C237.765 5.33493 235.987 6.08775 234.201 6.8232L235.342 9.5974C237.148 8.85428 238.944 8.09361 240.731 7.31562L239.534 4.56497ZM228.823 8.97361C227.025 9.67164 225.218 10.3522 223.403 11.0152L224.432 13.8331C226.266 13.1633 228.092 12.4756 229.908 11.7702L228.823 8.97361ZM217.943 12.9472C216.118 13.5721 214.286 14.1793 212.445 14.7685L213.36 17.6257C215.22 17.0302 217.071 16.4167 218.915 15.7853L217.943 12.9472ZM206.911 16.4788C205.063 17.0296 203.208 17.5624 201.345 18.077L202.143 20.9687C204.026 20.4487 205.901 19.9103 207.768 19.3539L206.911 16.4788ZM195.746 19.5629C193.878 20.0386 192.002 20.4961 190.12 20.9353L190.802 23.8569C192.704 23.4131 194.599 22.9508 196.486 22.4701L195.746 19.5629ZM184.466 22.1945C182.58 22.5946 180.688 22.9762 178.789 23.3393L179.353 26.286C181.271 25.919 183.183 25.5334 185.088 25.1292L184.466 22.1945ZM173.089 24.3701C171.189 24.694 169.283 24.9994 167.371 25.2861L167.815 28.253C169.748 27.9633 171.674 27.6547 173.593 27.3275L173.089 24.3701ZM161.634 26.0874C159.723 26.335 157.806 26.5638 155.883 26.7739L156.209 29.7562C158.151 29.5439 160.088 29.3127 162.019 29.0626L161.634 26.0874ZM150.119 27.3454C148.2 27.5165 146.275 27.6689 144.344 27.8023L144.551 30.7951C146.501 30.6603 148.446 30.5064 150.386 30.3336L150.119 27.3454ZM138.563 28.1443C136.638 28.2391 134.709 28.3151 132.774 28.3721L132.863 31.3708C134.817 31.3132 136.766 31.2365 138.711 31.1407L138.563 28.1443ZM126.984 28.4858C126.019 28.4953 125.053 28.5 124.086 28.5V31.5C125.063 31.5 126.038 31.4952 127.013 31.4857L126.984 28.4858ZM124.086 28.5C123.119 28.5 122.153 28.4953 121.188 28.4858L121.159 31.4857C122.133 31.4952 123.109 31.5 124.086 31.5V28.5ZM115.398 28.3721C113.463 28.3151 111.533 28.2391 109.609 28.1443L109.461 31.1407C111.406 31.2365 113.355 31.3132 115.309 31.3708L115.398 28.3721ZM103.828 27.8023C101.897 27.6689 99.9722 27.5165 98.0525 27.3454L97.7862 30.3336C99.7257 30.5064 101.671 30.6603 103.621 30.7951L103.828 27.8023ZM92.289 26.7739C90.3662 26.5638 88.4491 26.335 86.5378 26.0874L86.1525 29.0626C88.0836 29.3127 90.0206 29.5439 91.9632 29.7561L92.289 26.7739ZM80.8013 25.2861C78.8889 24.9994 76.9827 24.694 75.0828 24.3701L74.5786 27.3275C76.4983 27.6547 78.4243 27.9633 80.3565 28.253L80.8013 25.2861ZM69.3827 23.3393C67.4839 22.9762 65.5916 22.5946 63.7061 22.1945L63.0835 25.1292C64.9886 25.5334 66.9006 25.919 68.8193 26.2859L69.3827 23.3393ZM58.0519 20.9353C56.1694 20.4961 54.294 20.0386 52.4258 19.5629L51.6855 22.4701C53.5732 22.9508 55.4682 23.4131 57.3703 23.8569L58.0519 20.9353ZM46.8272 18.077C44.9641 17.5624 43.1086 17.0296 41.2608 16.4788L40.4039 19.3539C42.271 19.9103 44.1459 20.4487 46.0285 20.9687L46.8272 18.077ZM35.7269 14.7685C33.8863 14.1792 32.0536 13.5721 30.2292 12.9471L29.2571 15.7853C31.1006 16.4167 32.9523 17.0302 34.8122 17.6257L35.7269 14.7685ZM24.769 11.0152C22.9538 10.3522 21.1471 9.67164 19.3491 8.9736L18.2634 11.7702C20.0801 12.4756 21.9057 13.1633 23.7399 13.8331L24.769 11.0152ZM13.9712 6.82319C12.1844 6.08774 10.4065 5.33492 8.63783 4.56496L7.44038 7.31561C9.22751 8.09361 11.0239 8.85427 12.8294 9.59739L13.9712 6.82319Z"
                fill="black"
              />
            </svg>
          </Grid>
          <Grid item xs={6} lg={1.5} >
            <Box
              sx={{
                background: "linear-gradient(90deg, #091242 0%, #1F2A69 100%)",
                borderRadius: "20% 20% 20% 0",
                width: " 40%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px auto",
                
              }}
            >
              <LoginIcon sx={{ color: "white" }}></LoginIcon>
            </Box>
            <Typography
              sx={{
                color: "#091242",
                fontWeight: "bold",
                fontSize: "1em",
                textAlign: "center",
                fontFamily:"Rubik"
              }}
            >
              الخطوه الأولى
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize:{xs:".6rem",md:"1rem",},fontFamily:"Rubik"}}>
              قم بتسجيل الدخول لتصفح الخدمات
            </Typography>
          </Grid>
          <Grid
            mt={3}
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              onClick={onButtonClick}
              sx={{
                background: "linear-gradient(90deg, #1F2A69  0%, #091242 100%)",
                border: 0,
                color: "White",
                height: 48,
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                marginRight: "13vw",
                marginTop: "2vh",
                position: "relative",
                borderRadius: 0,
                fontFamily:"Rubik"
              }}
            >
              تصفح أكثر
              <Box
                sx={{
                  position: "absolute",
                  background: "#1F2A69",
                  width: "20%",
                  borderRadius: "50% 0 0",
                  bottom: "0",
                  height: "40%",
                  opacity: "70%",
                  right: "0",
                }}
              ></Box>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderServiceSteps;
