import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import Button from "../Custom/Button";
import { Post } from "../../model/Post";
import { getRecentPosts } from "../../api/PostApi/getRecentPosts";

function Home() {
  const [recentPosts, setRecentPosts] = useState<Post[] | []>([]);

  const { user } = useContext(appContext);

  const navigate = useNavigate();

  const fetchRecentPosts = async () => {
    try {
      const response = await getRecentPosts();
      if (response.success && response.data) {
        setRecentPosts(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessagePage = () => {
    navigate("/Main");
  };

  useEffect(() => {
    if (user === null) {
      navigate("/");
    } else navigate("/home");
  }, [user]);

  useEffect(() => {
    fetchRecentPosts();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center h-[80vh]">
        <div className="w-[20em] bg-second h-3/4 xl:w-[40em] rounded-[90px]">
          <div className="mt-3 flex justify-center gap-6 xl:text-2xl">
            <p className="text-first font-semibold">Welcome back</p>
            {user && (
              <div key={user.id}>
                <p className="text-fourth font-bold">{user.username}</p>
              </div>
            )}
          </div>
          <div className="my-8 text-center flex flex-col gap-4 xl:text-base items-center">
            <p className="text-third font-medium">See what people wrote about us and feel free to leave a message.</p>
            <Button fourth label="Leave a message" onClick={handleMessagePage} />
          </div>
          <div className="flex flex-col text-center  overflow-y-auto h-[16em] items-center">
            <p className="text-first font-medium text-2xl">List of last 10 messagess</p>
            {recentPosts.map((post) => {
              return (
                <div key={post.id} className="border rounded-xl mt-3 min-h-max flex flex-col gap-5 w-[90%]">
                  <div className="flex justify-center gap-6 mt-3 text-base text-fourth font-normal">
                    <p>User: {post.author}</p>
                    <p>Email: {post.email}</p>
                  </div>
                  <span className="text-third font-medium"> Message: {post.content}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
