import ApiClient from "../BaseApi/ApiClient";
import { AxiosResponse, AxiosError } from "axios";
import { Post } from "../../model/Post";

interface ResponseType<T> {
  success: Boolean;
  data?: T;
  error?: string;
}

const postMessage = async (Post: Post): Promise<ResponseType<Post>> => {
  try {
    const { data, status }: AxiosResponse<Post> = await ApiClient.post<Post>("/posts", Post);

    const response: ResponseType<Post> = { success: true, data };
    return response;
  } catch (error) {
    const { message } = error as AxiosError;
    const response: ResponseType<Post> = { success: false, error: message };
    return response;
  }
};

export { postMessage };
