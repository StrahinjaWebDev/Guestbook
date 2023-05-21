import ApiClient from "../BaseApi/ApiClient";
import { AxiosResponse, AxiosError } from "axios";
import { Post } from "../../model/Post";

interface ResponseType<T> {
  success: boolean;
  data?: T;
  error?: string;
}

const deletePost = async (postId: string): Promise<ResponseType<Post>> => {
  try {
    const response: AxiosResponse<Post> = await ApiClient.delete(`/posts/${postId}`);
    return { success: true, data: response.data };
  } catch (error) {
    const { message } = error as AxiosError;
    return { success: false, error: message };
  }
};

export { deletePost };
