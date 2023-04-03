import React from "react";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item">
        <i className="bi-twitter"></i>
        Tuiter
      </a>
      <a
        href="/tuiter"
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
      >
        <i className="bi-house-fill"></i>
        Home
      </a>
      <a
        href="/tuiter/explore"
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        <i className="bi-hash"></i>
        Explore
      </a>
      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <i className="bi-bell-fill"></i>
        Notifications
      </a>
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <i className="bi-envelope-fill"></i>
        Messages
      </a>
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <i className="bi-bookmark-fill"></i>
        Bookmarks
      </a>
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        <i className="bi-list"></i>
        Lists
      </a>
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        <i className="bi-person-fill"></i>
        Profile
      </a>
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        <i className="bi-three-dots"></i>
        More
      </a>
    </div>
  );
};
export default NavigationSidebar;
