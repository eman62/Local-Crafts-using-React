import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import CommentCard from "./commentCard";
import { axiosInstance } from "../../api/config";
const labels = {
  0.5: "غير مفيد",
  1: "غير مفيد+",
  1.5: "ضغيف",
  2: "ضعيف + ",
  2.5: "جيد ",
  3: "جيد +",
  3.5: "جيد جدا",
  4: "جيد جدا +",
  4.5: "ممتاز",
  5: "ممتاز +",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Comments = ({ data }) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const token = localStorage.getItem("token");
  const [comment, setComment] = useState({
    comment: "",
    rating: 0,
  });
  const [comments, setComments] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({
      ...comment,
      [name]: value,
    });
  };
  useEffect(() => {
    const fetchProductComments = async () => {
      try {
        const response = await axiosInstance.get(
          `/products/${data._id}/feedback`
          //   {
          //     headers: {
          //       token,
          //     },
          //   }
        );
        setComments(response.data);
        console.log(comments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchProductComments();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const commentData = {
        comment: comment.comment,
        // rating: value,
        rating: 0,
      };

      await axiosInstance.post(`/products/${data._id}/feedback`, commentData, {
        headers: {
          token,
        },
      });
      console.log("success");
      setComment({
        comment: "",
        rating: 0,
      });
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  return (
    <Box mt={5} mb={5}>
      <Box mt={5}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box mt={1}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H17V17H0V0Z" fill="url(#paint0_linear_29_4096)" />
              <defs>
                <linearGradient
                  id="paint0_linear_29_4096"
                  x1="-29875"
                  y1="87704.3"
                  x2="-29853.6"
                  y2="87705.8"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFB629" />
                  <stop offset="0.507189" stop-color="#FFDA56" />
                  <stop offset="1" stop-color="#FFD7A6" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
          <Typography variant="h5" sx={{ fontFamily: " 'Rubik', sans-serif" }}>
            التعليقات
          </Typography>
        </Box>
        {comments &&
          comments.map((commentdata, index) => {
            <CommentCard key={index} data={commentdata} />;
          })}

        <Box
          mt={5}
          sx={{ display: "flex", justifyContent: "center", width: "65%" }}
        >
          <svg
            width="37"
            height="16"
            viewBox="0 0 37 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.58063 10.768C4.11396 10.768 4.53529 10.7147 4.84462 10.608C5.16463 10.5013 5.39396 10.3467 5.53263 10.144C5.68196 9.93067 5.75663 9.68533 5.75663 9.408C5.75663 9.19467 5.69796 8.93867 5.58063 8.64C5.47396 8.34133 5.32463 8.01067 5.13263 7.648C4.94063 7.27467 4.71663 6.88533 4.46063 6.48C4.21529 6.064 3.94863 5.64267 3.66063 5.216L4.76463 4.496C5.18063 5.12533 5.54329 5.72267 5.85263 6.288C6.16196 6.84267 6.42329 7.36533 6.63663 7.856C6.84996 8.336 7.02063 8.78933 7.14863 9.216C7.29796 9.68533 7.46329 10.032 7.64463 10.256C7.83663 10.48 8.03396 10.624 8.23663 10.688C8.43929 10.7413 8.62596 10.768 8.79663 10.768C9.02063 10.768 9.18596 10.832 9.29263 10.96C9.39929 11.0773 9.45263 11.2213 9.45263 11.392C9.45263 11.5627 9.37796 11.7227 9.22863 11.872C9.07929 12.0107 8.88729 12.08 8.65263 12.08C8.30063 12.08 7.95396 12.016 7.61263 11.888C7.28196 11.7493 6.99396 11.5307 6.74863 11.232C6.50329 10.9227 6.33263 10.512 6.23663 10L6.87663 9.488C6.87663 9.91467 6.78596 10.3307 6.60463 10.736C6.42329 11.1307 6.09263 11.456 5.61263 11.712C5.14329 11.968 4.46596 12.096 3.58063 12.096C3.19663 12.096 2.82329 12.064 2.46063 12C2.10863 11.936 1.78329 11.8453 1.48463 11.728C1.18596 11.6 0.924625 11.4507 0.700625 11.28L1.34063 10.176C1.55396 10.3147 1.85263 10.448 2.23663 10.576C2.62063 10.704 3.06863 10.768 3.58063 10.768ZM8.65625 12.08L8.81625 10.768C9.44558 10.768 9.93625 10.7467 10.2883 10.704C10.6403 10.6507 10.8909 10.528 11.0403 10.336C11.1896 10.1333 11.2643 9.81867 11.2643 9.392C11.2643 9.12533 11.2216 8.81067 11.1363 8.448C11.0509 8.07467 10.9389 7.68 10.8003 7.264C10.6616 6.848 10.5123 6.43733 10.3523 6.032L11.6483 5.552C11.7869 5.89333 11.9149 6.28267 12.0323 6.72C12.1603 7.15733 12.2669 7.58933 12.3523 8.016C12.4376 8.44267 12.4803 8.816 12.4803 9.136C12.4803 9.66933 12.4056 10.1227 12.2563 10.496C12.1176 10.8693 11.8936 11.1733 11.5843 11.408C11.2749 11.6427 10.8749 11.8133 10.3843 11.92C9.90425 12.0267 9.32825 12.08 8.65625 12.08ZM11.6163 15.104C11.3923 15.104 11.2003 15.024 11.0403 14.864C10.8909 14.7147 10.8163 14.5333 10.8163 14.32C10.8163 14.1067 10.8909 13.92 11.0403 13.76C11.2003 13.6 11.3923 13.52 11.6163 13.52C11.8296 13.52 12.0109 13.6 12.1603 13.76C12.3203 13.92 12.4003 14.1067 12.4003 14.32C12.4003 14.5333 12.3203 14.7147 12.1603 14.864C12.0109 15.024 11.8296 15.104 11.6163 15.104ZM9.42425 15.104C9.20025 15.104 9.00825 15.024 8.84825 14.864C8.69892 14.7147 8.62425 14.5333 8.62425 14.32C8.62425 14.1067 8.69892 13.92 8.84825 13.76C9.00825 13.6 9.20025 13.52 9.42425 13.52C9.63758 13.52 9.81892 13.6 9.96825 13.76C10.1283 13.92 10.2083 14.1067 10.2083 14.32C10.2083 14.5333 10.1283 14.7147 9.96825 14.864C9.81892 15.024 9.63758 15.104 9.42425 15.104ZM13.5015 15.712L13.0375 14.496C13.8162 14.24 14.4615 13.9467 14.9735 13.616C15.4962 13.2853 15.9068 12.9333 16.2055 12.56C16.5148 12.1867 16.7335 11.808 16.8615 11.424C16.9895 11.0293 17.0535 10.6507 17.0535 10.288C17.0535 9.76533 16.9362 9.23733 16.7015 8.704C16.4775 8.16 16.2268 7.648 15.9495 7.168L17.1175 6.576C17.3202 6.94933 17.4962 7.31733 17.6455 7.68C17.8055 8.04267 17.9442 8.384 18.0615 8.704C18.1895 9.024 18.2908 9.31733 18.3655 9.584C18.5148 10.0427 18.7068 10.3573 18.9415 10.528C19.1868 10.688 19.5175 10.768 19.9335 10.768C20.1575 10.768 20.3175 10.832 20.4135 10.96C20.5202 11.0773 20.5735 11.2213 20.5735 11.392C20.5735 11.5627 20.4988 11.7227 20.3495 11.872C20.2002 12.0107 20.0082 12.08 19.7735 12.08C19.3042 12.08 18.9202 12 18.6215 11.84C18.3335 11.6693 18.1148 11.4507 17.9655 11.184C17.8162 10.9067 17.7148 10.6187 17.6615 10.32L18.1735 10.608C18.1735 11.312 18.0135 11.952 17.6935 12.528C17.3842 13.1147 16.9842 13.6213 16.4935 14.048C16.0028 14.4853 15.4908 14.8427 14.9575 15.12C14.4242 15.3973 13.9388 15.5947 13.5015 15.712ZM16.0455 4.736C15.8215 4.736 15.6295 4.66133 15.4695 4.512C15.3202 4.352 15.2455 4.16533 15.2455 3.952C15.2455 3.73867 15.3202 3.552 15.4695 3.392C15.6295 3.232 15.8215 3.152 16.0455 3.152C16.2588 3.152 16.4402 3.232 16.5895 3.392C16.7495 3.552 16.8295 3.73867 16.8295 3.952C16.8295 4.16533 16.7495 4.352 16.5895 4.512C16.4402 4.66133 16.2588 4.736 16.0455 4.736ZM19.7812 12.08L19.9413 10.768C20.2399 10.768 20.4746 10.704 20.6453 10.576C20.8266 10.448 20.9973 10.2347 21.1573 9.936C21.3279 9.63733 21.5413 9.23733 21.7973 8.736C22.0533 8.224 22.3093 7.808 22.5653 7.488C22.8319 7.15733 23.0879 6.90133 23.3333 6.72C23.5893 6.528 23.8293 6.39467 24.0533 6.32C24.2773 6.24533 24.4853 6.208 24.6773 6.208C25.0293 6.208 25.3439 6.288 25.6213 6.448C25.8986 6.59733 26.1599 6.85867 26.4053 7.232C26.6506 7.59467 26.9013 8.096 27.1573 8.736C27.4026 9.32267 27.6213 9.76533 27.8133 10.064C28.0159 10.352 28.2239 10.544 28.4373 10.64C28.6613 10.7253 28.9119 10.768 29.1892 10.768C29.4133 10.768 29.5733 10.832 29.6693 10.96C29.7759 11.0773 29.8293 11.2213 29.8293 11.392C29.8293 11.5627 29.7546 11.7227 29.6053 11.872C29.4559 12.0107 29.2639 12.08 29.0293 12.08C28.6133 12.08 28.2293 12.0107 27.8773 11.872C27.5359 11.7333 27.2479 11.5147 27.0133 11.216L27.2373 10.88C27.1199 11.2107 26.9599 11.4827 26.7573 11.696C26.5653 11.8987 26.3466 12.048 26.1013 12.144C25.8559 12.2507 25.5946 12.304 25.3173 12.304C24.9653 12.304 24.6026 12.2293 24.2293 12.08C23.8666 11.9307 23.5146 11.7173 23.1733 11.44C22.8319 11.1627 22.5333 10.8373 22.2773 10.464C21.9999 10.9547 21.7333 11.3173 21.4773 11.552C21.2319 11.776 20.9759 11.92 20.7093 11.984C20.4426 12.048 20.1332 12.08 19.7812 12.08ZM22.8853 9.248C23.0666 9.54667 23.2586 9.808 23.4613 10.032C23.6746 10.256 23.8879 10.4427 24.1013 10.592C24.3146 10.7307 24.5226 10.8373 24.7253 10.912C24.9386 10.976 25.1306 11.008 25.3013 11.008C25.6746 11.008 25.9466 10.8747 26.1173 10.608C26.2986 10.3413 26.2933 9.968 26.1013 9.488C26.0053 9.24267 25.9039 9.00267 25.7973 8.768C25.7013 8.53333 25.5946 8.32 25.4773 8.128C25.3599 7.92533 25.2266 7.77067 25.0773 7.664C24.9279 7.54667 24.7626 7.488 24.5813 7.488C24.4213 7.488 24.2506 7.54133 24.0693 7.648C23.8986 7.75467 23.7119 7.936 23.5093 8.192C23.3173 8.448 23.1093 8.8 22.8853 9.248ZM29.0312 12.08L29.1753 10.768C29.7832 10.768 30.2099 10.7093 30.4553 10.592C30.7006 10.4747 30.8393 10.2667 30.8713 9.968C30.9139 9.66933 30.9246 9.25333 30.9033 8.72L30.5993 0.575999H31.8953L32.2153 8.576C32.2366 9.14133 32.2153 9.64267 32.1513 10.08C32.0979 10.5173 31.9593 10.8853 31.7353 11.184C31.5219 11.4827 31.1966 11.7067 30.7593 11.856C30.3326 12.0053 29.7566 12.08 29.0312 12.08ZM34.6595 12L34.3395 0.575999H35.6355L35.9555 12H34.6595Z"
              fill="#D94A27"
            />
            <path d="M0.140625 14H36.9955V14.8H0.140625V14Z" fill="#D94A27" />
          </svg>
        </Box>
        <Box mt={10}>
          <Box mb={5}>
            <Typography
              sx={{ fontFamily: " 'Rubik', sans-serif" }}
              variant="h5"
            >
              ما هو تقيمك للخدمة ؟
            </Typography>
          </Box>
          <Box
            sx={{
              width: 200,
              display: "flex",

              flexDirection: "column",
            }}
          >
            <Box
              mb={3}
              sx={{
                direction: "ltr",
                backgroundColor: "#999999",
                width: "65%",
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon
                    style={{ opacity: 0.55 }}
                    fontSize="inherit"
                    sx={{ borderColor: "black" }}
                  />
                }
              />
            </Box>

            <Typography
              variant="h5"
              sx={{ mt: 1, fontFamily: " 'Rubik', sans-serif" }}
            >
              تقيمك هو
            </Typography>
            {value !== null && (
              <Typography
                variant="h6"
                sx={{ ml: 2, fontFamily: " 'Rubik', sans-serif" }}
              >
                {labels[hover !== -1 ? hover : value]}
              </Typography>
            )}
          </Box>
          <form onSubmit={handleSubmit}>
            <Box mt={5}>
              <Typography variant="p"> أضف تعليق</Typography>
              <Box mt={3} sx={{ width: "65%" }}>
                {/* sx={{ color: "#667085" }} */}
                <TextField
                  id="comment"
                  name="comment"
                  label=" تعليق"
                  value={comment.comment}
                  onChange={handleChange}
                  multiline
                  maxRows={6}
                  sx={{ width: "100%" }}
                ></TextField>
              </Box>
            </Box>
            <Button
              type="submit"
              mt={5}
              sx={{
                background: "linear-gradient(90deg, #1F2A69  0%, #091242 100%)",
                border: 0,
                color: "White",
                height: 48,
                padding: "0 30px",
                boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                marginTop: "4vh",
                position: "relative",
                borderRadius: 0,
              }}
            >
              نشر
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
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Comments;
