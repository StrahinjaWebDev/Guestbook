import React, { useContext, useState, useEffect } from "react";
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
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  const { user } = useContext(appContext);

  const navigate = useNavigate();

  const fetchAllPosts = async () => {
    try {
      const response = await getPosts();
      if (response.success && response.data) {
        setPosts(response.data);
      } else {
        console.log(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostMessage = async () => {
    const post = {
      authorId: user?.id,
      email: email,
      content: message,
    };
    const response = await postMessage(post);
    if (response.success) {
      console.log("Poslato");
    } else {
      console.log(response.error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  console.log(user);
  console.log(posts);

  return (
    <div className="flex justify-around items-center h-3/4 flex-col xl:flex-row ">
      <div className="rounded-lg bg-gray-300 opacity-90 p-6 w-[20em] xl:w-[35em]">
        <form>
          <div className="relative mb-6">
            <Input disabledInput type="text" id="nameInput" disabled value={user?.username || ""} />
            <Label htmlText="nameInput" primary />
          </div>

          <div className="relative mb-6">
            <Input
              secondary
              type="email"
              id="emailInput"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlText="emailInput" primary text="Email address" />
          </div>

          <div className="relative mb-6" data-te-input-wrapper-init>
            <TextArea primary id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Label htmlText="message" primary text="Message" />
          </div>

          <Button fifth label="Send" onClick={handlePostMessage} />
        </form>
      </div>
      <div className="bg-gray-300 opacity-90 p-6 w-[20em] xl:w-[35em] flex flex-col items-center">
        <span>Which user posted?</span>
        {posts.map((post) => {
          return (
            <div key={post.id} className="flex gap-12">
              <p>{post.author}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
