import React, { useState } from "react";

const initialNotifications = [
  { id: '1', message: 'New comment on your post' },
  { id: '2', message: 'Someone reacted to your post' },
  { id: '3', message: 'New follower' },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const handleRefresh = () => {
    setNotifications(initialNotifications);
  };

  return (
    <section>
      <h2>Notifications</h2>
      <button className="button" onClick={handleRefresh}>Refresh Notifications</button>
      <section className="notificationsList">
        {notifications.map((n) => (
          <div key={n.id}>{n.message}</div>
        ))}
      </section>
    </section>
  );
};

export default Notifications;