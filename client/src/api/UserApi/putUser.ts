import ApiClient from "../BaseApi/ApiClient";
import { AxiosError } from "axios";
import { User } from "../../model/User";

interface ResponseType<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const putUser = async (userId: string, updatedUser: User): Promise<ResponseType<User>> => {
  try {
    const { data } = await ApiClient.put<User>(`/user/${userId}`, updatedUser);

    return { success: true, data };
  } catch (error) {
    const { message } = error as AxiosError;
    return { success: false, error: message };
  }
};

export { putUser };
