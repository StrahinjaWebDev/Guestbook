import ApiClient from "../BaseApi/ApiClient";
import { AxiosResponse, AxiosError } from "axios";
import { User } from "../../model/User";

interface ResponseType<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const deleteUser = async (userId: string): Promise<ResponseType<User>> => {
  try {
    const response: AxiosResponse<User> = await ApiClient.delete(`/user/${userId}`);
    return { success: true, data: response.data };
  } catch (error) {
    const { message } = error as AxiosError;
    return { success: false, error: message };
  }
};

export { deleteUser };
