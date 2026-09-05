import React, { createContext, useState, useContext } from "react";
import { initialPosts, initialUsers } from "./data";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [users] = useState(initialUsers);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const updatePost = (id, title, content) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, title, content } : p)));
  };

  const reactToPost = (id, reactionName) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? { ...p, reactions: { ...p.reactions, [reactionName]: p.reactions[reactionName] + 1 } }
          : p
      )
    );
  };

  return (
    <PostsContext.Provider value={{ posts, users, addPost, updatePost, reactToPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);