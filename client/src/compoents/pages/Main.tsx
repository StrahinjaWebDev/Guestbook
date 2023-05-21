import React, { useContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import Input from "../Custom/Input";
import Button from "../Custom/Button";
import Label from "../Custom/Label";
import TextArea from "../Custom/TextArea";
import { appContext } from "../../../context/AppProvider";
import { postMessage } from "../../api/PostApi/postMessage";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../api/PostApi/getPosts";
import { Post } from "../../model/Post";

const Main = () => {
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [httpStatus, setHttpStatus] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);

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

  const handlePostMessage = async () => {
    setRequestLoading(true);
    const post = {
      authorId: user?.id,
      content: message,
    };
    try {
      setHttpStatus("Sending message...");
      const response = await postMessage(post);
      setRequestLoading(false);
      if (response.success) {
        setHttpStatus("Message sent successfully!");
        toast.success("Successfully sent message!");
        setRequestLoading(true);
      } else if (response.error) {
        setHttpStatus("Error sending message!");
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/");
    }
  }, [user]);

  console.log(user);

  return (
    <div className="flex justify-around items-center h-3/4 flex-col xl:flex-row ">
      <div className="rounded-lg bg-gray-300 opacity-90 p-6 w-[20em] xl:w-[35em]">
        <form>
          <div className="relative mb-6">
            <Input disabledInput type="text" id="nameInput" disabled value={user?.username || ""} />
            <Label htmlText="nameInput" primary />
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <TextArea primary id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Label htmlText="message" primary text="Message" />
          </div>

          <Button fifth label="Send" disabled={requestLoading} onClick={handlePostMessage} />
          <span className="text-blue-500 font-bold">{httpStatus}</span>
        </form>
      </div>
      <div className="bg-gray-300 max-h-[20em] opacity-90 p-6 w-[20em] xl:w-[35em] flex flex-col items-center overflow-y-auto scroll-modern">
        <span className="font-bold text-xl text-second">Which users posted?</span>
        {posts.map((post) => {
          return (
            <div key={post.id} className="flex gap-12 mt-3">
              <p className="text-first font-semibold">{post.author?.username}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
