import ApiClient from "../BaseApi/ApiClient";
import { AxiosResponse, AxiosError } from "axios";
import { Post } from "../../model/Post";

interface ResponseType<T> {
  success: Boolean;
  data?: T;
  error?: string;
}

const getRecentPosts = async (): Promise<ResponseType<Post[]>> => {
  try {
    const { data, status }: AxiosResponse<Post[]> = await ApiClient.get<Post[]>("/posts/recent");

    const response: ResponseType<Post[]> = { success: true, data };
    return response;
  } catch (error) {
    const { message } = error as AxiosError;
    const response: ResponseType<Post[]> = { success: false, error: message };
    return response;
  }
};

export { getRecentPosts };
