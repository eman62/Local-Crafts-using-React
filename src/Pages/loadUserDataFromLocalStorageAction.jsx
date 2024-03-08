import { saveUserData, saveUserToken } from "../stores/slice/user";

export const loadUserDataFromLocalStorage = () => {
  return (dispatch) => {
    try {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const token = localStorage.getItem("token");
      if (userData && token) {
        dispatch(saveUserData(userData));
        dispatch(saveUserToken(token));
      }
    } catch (error) {
      console.error("Error loading user data from localStorage:", error);
    }
  };
};
