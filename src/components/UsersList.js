import React, { useState } from "react";
import { usePosts } from "./PostsContext";

const UsersList = () => {
  const { users, posts } = usePosts();
  const [selectedUserId, setSelectedUserId] = useState(null);

  const userPosts = posts.filter((p) => p.userId === selectedUserId);

  return (
    <section>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedUserId(user.id)}>{user.name}</button>
          </li>
        ))}
      </ul>

      {selectedUserId && (
        <div className="posts-list">
          <h3>Posts by this user</h3>
          {userPosts.map((post) => (
            <article key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default UsersList;