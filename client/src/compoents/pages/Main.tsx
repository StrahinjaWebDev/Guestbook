import React, { useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { appContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../api/PostApi/getPosts";
import { Post } from "../../model/Post";
import PostForm from "./Main/PostForm";
import UsersThatPosted from "./Main/UsersThatPosted";

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { user, isLoading } = useContext(appContext);

  const navigate = useNavigate();

  const fetchAllPosts = async () => {
    try {
      const response = await getPosts();
      if (response.success && response.data) {
        setPosts(response.data);
      } else {
        console.log(response.error);
        toast.error("Can't load posts right now, try again later...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    if (user === null && !isLoading) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="flex justify-around items-center h-3/4 flex-col xl:flex-row ">
      <PostForm posts={posts} />
      <UsersThatPosted posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default Main;
