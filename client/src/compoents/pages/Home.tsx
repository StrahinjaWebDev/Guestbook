import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { appContext } from "../../../context/AppProvider";
import { useNavigate } from "react-router-dom";
import Button from "../Custom/Button";
import { getRecentPosts } from "../../api/PostApi/getRecentPosts";
import { RecentPosts } from "../../model/RecentPosts";

function Home() {
  const [recentPosts, setRecentPosts] = useState<RecentPosts[] | []>([]);

  const { user } = useContext(appContext);

  const navigate = useNavigate();

  const fetchRecentPosts = async () => {
    try {
      const response = await getRecentPosts();
      if (response.success && response.data) {
        setRecentPosts(response.data);
      } else {
        console.log(response.error);
        toast.error("Error while loading posts try again later!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessagePage = () => {
    navigate("/main");
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
        <div className="w-[20em] bg-second h-3/4 xl:w-[40em] rounded-[90px] flex flex-col justify-around">
          <div className="mt-3 flex justify-center gap-6 xl:text-2xl">
            <p className="text-first font-semibold">Welcome back</p>
            {user && (
              <div key={user.id}>
                <p className="text-fourth font-bold">{user.username}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col text-center scroll-modern overflow-y-auto h-[16em] items-center">
            <p className="text-fourth font-medium text-2xl">List of last 10 messagess</p>
            {recentPosts.map((post) => {
              return (
                post.author && (
                  <div key={post.id} className=" opacity-95 bg-fourth rounded-xl mt-3 min-h-max flex flex-col gap-5 w-[90%]">
                    <span className="text-third font-medium py-4 px-3 flex justify-start"> Message: {post.content}</span>
                    <div className="flex justify-end pr-5 gap-6 pb-1 text-base text-third font-normal">
                      <p>User: {post.author}</p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className="my-8 text-center flex flex-col gap-4 xl:text-base items-center">
            <p className="text-third font-medium text-lg">See what people wrote about us and feel free to leave a message.</p>
            <Button fourth label="Leave a message" onClick={handleMessagePage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
