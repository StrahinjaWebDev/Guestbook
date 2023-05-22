import ApiClient from "../BaseApi/ApiClient";
import { AxiosError } from "axios";
import { User } from "../../model/User";

interface ResponseType<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const getUsers = async (): Promise<ResponseType<User[]>> => {
  try {
    const { data } = await ApiClient.get<User[]>("/users");

    return { success: true, data };
  } catch (error) {
    const { message } = error as AxiosError;
    return { success: false, error: message };
  }
};

export { getUsers };
