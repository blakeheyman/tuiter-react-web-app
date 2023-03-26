import React from "react";
import TuitStats from "./tuit-stats";
const TuitItem = ({ post }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={70}
            className="rounded-circle"
            src={`/images/${post.image}`}
          />
        </div>
        <div className="col-10">
          <div>
            <span className="fw-bolder">{post.userName}</span>{" "}
            <i class="bi-patch-check-fill" style={{ color: "dodgerblue" }} />{" "}
            {post.handle}
            {" • "}
            {post.time}
          </div>
          {post.tuit}
          <br />
          <br />
          <TuitStats {...post} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
