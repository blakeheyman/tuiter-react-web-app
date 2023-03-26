import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item">
        <i class="bi-twitter"></i>
        Tuiter
      </a>
      <a
        href="/tuiter"
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
      >
        <i class="bi-house-fill"></i>
        Home
      </a>
      <a
        href="/tuiter/explore"
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        <i class="bi-hash"></i>
        Explore
      </a>
      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <i class="bi-bell-fill"></i>
        Notifications
      </a>
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <i class="bi-envelope-fill"></i>
        Messages
      </a>
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <i class="bi-bookmark-fill"></i>
        Bookmarks
      </a>
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        <i class="bi-list"></i>
        Lists
      </a>
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        <i class="bi-person-fill"></i>
        Profile
      </a>
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        <i class="bi-three-dots"></i>
        More
      </a>
    </div>
  );
};
export default NavigationSidebar;
