import React, { useState } from "react";
import { usePosts } from "./PostsContext";

const AddPostForm = () => {
  const { users, addPost } = usePosts();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      id: Date.now().toString(),
      title,
      content,
      userId: author,
      reactions: { thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0 },
    });
    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value=""></option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;