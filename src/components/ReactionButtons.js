import React from "react";
import { usePosts } from "./PostsContext";

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀',
};

const ReactionButtons = ({ post }) => {
  const { reactToPost } = usePosts();

  return (
    <div>
      {Object.keys(post.reactions).map((name, index) => (
        <button
          key={name}
          onClick={() => {
            if (index < 4) {
              reactToPost(post.id, name);
            }
          }}
        >
          {reactionEmoji[name]} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;