import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("User LoggedIn");
      return res.data;
    } catch (error) {
      toast.error("Login Failed");
      return thunkApi.rejectWithValue("Login Failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "auth/hydrate",
  async (_, thunkApi) => {
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
      toast.error("Unauthorized User")
      return thunkApi.rejectWithValue("Unauthorized User");
    }
  },
);
