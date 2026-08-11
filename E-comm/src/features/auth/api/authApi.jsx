import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    console.log("response from login api", res);

    const token = res?.data?.token || res?.data?.accessToken || null;

    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      console.warn("Login response did not contain a token field.", res?.data);
    }

    return res.data;
  } catch (error) {
    console.log("error in login api", error);
    throw error;
  }
};

export const hydrateUser = async () => {
  let token = localStorage.getItem("accessToken");

  if (!token) {
    return null;
  }

  try {
    let res = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response from hydration api", res);

    return res.data;
  } catch (error) {
    console.log("error in hydration api", error);
    localStorage.removeItem("accessToken");
    return null;
  }
};
