import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { deletePost } from "../../../api/PostApi/deletePost";
import { Post } from "../../../model/Post";
import { appContext } from "../../../../context/AppProvider";

interface Props {
  posts: Post[] | [];
  // eslint-disable-next-line no-unused-vars
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const UsersThatPosted = ({ posts, setPosts }: Props) => {
  const { user } = useContext(appContext);

  const handleDeletePost = async (postId: string) => {
    try {
      const postToDelete = posts.find((post) => post.id === postId);
      if (postToDelete && postToDelete.authorId === user?.id) {
        await deletePost(postId);
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
        toast.success("Post deleted successfully");
      } else {
        toast.error("You can only delete your own posts");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete post");
    }
  };

  return (
    <div className="bg-gray-300 max-h-[20em] opacity-90 p-6 w-[20em] xl:w-[30em] rounded-[20px] flex flex-col items-center overflow-y-auto scroll-modern bg-opacity-95">
      <span className="font-bold text-2xl text-second">Users that posted on Guestbook</span>
      {posts.map((post) => {
        return (
          <div key={post.id} className="flex mt-8 justify-between w-full bg-gray-300 rounded-full bg-opacity-50">
            <p className="text-first font-medium pl-12">{post.author?.username}</p>
            <button className="text-red-500 font-semibold mr-4 " onClick={() => post.id && handleDeletePost(post.id)}>
              Delete post
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UsersThatPosted;
