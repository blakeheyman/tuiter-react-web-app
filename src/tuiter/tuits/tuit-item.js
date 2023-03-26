import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

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
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(post._id)}
            ></i>
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
