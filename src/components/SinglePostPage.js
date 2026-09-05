import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "./PostsContext";

const SinglePostPage = () => {
  const { postId } = useParams();
  const { posts, updatePost } = usePosts();
  const post = posts.find((p) => p.id === postId);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");

  if (!post) {
    return <section><h2>Post not found</h2></section>;
  }

  const handleSave = () => {
    updatePost(post.id, title, content);
    setEditing(false);
  };

  return (
    <section className="post">
      {editing ? (
        <div>
          <label htmlFor="postTitle">Title:</label>
          <input
            type="text"
            id="postTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="postContent">Content:</label>
          <textarea
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className="button" onClick={handleSave}>Save Post</button>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button className="button" onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </section>
  );
};

export default SinglePostPage;