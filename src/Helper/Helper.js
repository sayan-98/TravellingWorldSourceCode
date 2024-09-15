import axios from "axios";
let adminUrl = "https://wtsacademy.dedicateddevelopers.us/api/";
if (process.env?.REACT_APP_ENV === "production") {
  adminUrl = "https://wtsacademy.dedicateddevelopers.us/api/"; // change when app goes live
}

// Products Image URl
let imageURl = "https://wtsacademy.dedicateddevelopers.us/uploads/product";

export const baseURL = adminUrl;
let axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(
  async function (config) {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token !== null || token !== undefined) {
      config.headers["x-access-token"] = token;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export const productImagePath = (media) => {
  // // For Testing
  // let img = imageURl + `/${media}`;
  // console.log(img);

  return imageURl + `/${media}`;
};

export default axiosInstance;
