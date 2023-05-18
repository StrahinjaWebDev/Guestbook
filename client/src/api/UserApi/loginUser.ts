import ApiClient from "../BaseApi/ApiClient";
import { AxiosResponse, AxiosError } from "axios";
import { User } from "../../model/User";

interface ResponseType<T> {
  success: Boolean;
  data?: T;
  error?: string;
}

const loginUser = async (User: User): Promise<ResponseType<User[]>> => {
  try {
    const { data, status }: AxiosResponse<User[]> = await ApiClient.post<User[]>("/users/login", User);

    const response: ResponseType<User[]> = { success: true, data };
    return response;
  } catch (error) {
    const { message } = error as AxiosError;
    const response: ResponseType<User[]> = { success: false, error: message };
    return response;
  }
};

export { loginUser };
