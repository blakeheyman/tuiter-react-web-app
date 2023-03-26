import React from "react";
import TuitStats from "./tuit-stats";
const TuitItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.png",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 3456,
    handle: "@spacex",
    tuit: "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars",
  },
}) => {
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
