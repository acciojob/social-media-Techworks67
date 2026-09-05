import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "./PostsContext";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const { posts } = usePosts();

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <article key={post.id} className="post-excerpt">
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}</p>
          <Link to={`/posts/${post.id}`} className="button">View Post</Link>
          <ReactionButtons post={post} />
        </article>
      ))}
    </div>
  );
};

export default PostsList;