import axios, { AxiosResponse } from "axios";
import { LoginData } from "../../Constraints/types";

export const userLoginAPI = async (payload: LoginData) => {
  try {
    let res: AxiosResponse<{ token: string }> = await axios.post(
      "https://reqres.in/api/login",
      payload
    );
    return res.data.token;
  } catch (e) {
    console.error("userLoginAPI error", e);
  }
};