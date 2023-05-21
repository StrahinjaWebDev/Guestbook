import ApiClient from "../BaseApi/ApiClient";
import { AxiosResponse, AxiosError } from "axios";
import { RecentPosts } from "../../model/RecentPosts";

interface ResponseType<T> {
  success: Boolean;
  data?: T;
  error?: string;
}

const getRecentPosts = async (): Promise<ResponseType<RecentPosts[]>> => {
  try {
    const { data, status }: AxiosResponse<RecentPosts[]> = await ApiClient.get<RecentPosts[]>("/posts/recent");

    const response: ResponseType<RecentPosts[]> = { success: true, data };
    return response;
  } catch (error) {
    const { message } = error as AxiosError;
    const response: ResponseType<RecentPosts[]> = { success: false, error: message };
    return response;
  }
};

export { getRecentPosts };
