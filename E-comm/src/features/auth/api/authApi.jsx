import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let res = await api.post("/auth/login", credentials);
    console.log("response from login api", res);
    return res.data;
  } catch (error) {
    console.log("error in login api", error);
  }
};
