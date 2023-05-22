import React, { useContext, useState } from "react";
import Input from "../../Custom/Input";
import Label from "../../Custom/Label";
import TextArea from "../../Custom/TextArea";
import Button from "../../Custom/Button";
import { appContext } from "../../../../context/AppProvider";
import { toast } from "react-hot-toast";
import { postMessage } from "../../../api/PostApi/postMessage";
import { Post } from "../../../model/Post";

interface PostFormProps {
  posts: Post[] | [];
}

const PostForm = ({ posts }: PostFormProps) => {
  const [message, setMessage] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);
  const [httpStatus, setHttpStatus] = useState("");

  const { user, isLoading } = useContext(appContext);

  const handlePostMessage = async () => {
    setRequestLoading(true);
    if (message === "") {
      toast.error("Can't post empty message!");
      return;
    }
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
        setMessage("");
        setRequestLoading(true);
      } else if (response.error) {
        setHttpStatus("Error sending message!");
        toast.error("Something went wrong!");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-lg bg-gray-300 opacity-90 p-6 w-[20em] xl:w-[35em] ">
      <form className="flex flex-col justify-center">
        <div className="relative mb-6">
          <Input disabledInput type="text" id="nameInput" disabled value={user?.username || ""} />
          <Label htmlText="nameInput" primary />
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <TextArea primary id="message" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <Label htmlText="message" primary text="Message" />
        </div>
        <Button
          fifth
          label="Send"
          disabled={requestLoading || posts.some((post) => post.author?.id === user?.id)}
          onClick={handlePostMessage}
        />
        <span className="text-blue-500 font-bold text-center pt-4">{httpStatus}</span>
      </form>
    </div>
  );
};

export default PostForm;
