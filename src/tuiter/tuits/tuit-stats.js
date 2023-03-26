import { toggleLike } from "../reducers/tuits-reducer";
import { useDispatch } from "react-redux";

const TuitStats = (post) => {
  const dispatch = useDispatch();
  const likeClicked = (post) => {
    dispatch(toggleLike(post));
  };
  return (
    <div className="row">
      <div className="col-3">
        <i className="bi-chat" />
        {` ${post.replies}`}
      </div>
      <div className="col-3">
        <i className="bi-arrow-repeat" />
        {` ${post.retuits}`}
      </div>
      <div className="col-3" onClick={() => likeClicked(post)}>
        {post.liked ? (
          <i className="bi-heart-fill" style={{ color: "red" }} />
        ) : (
          <i className="bi-heart" />
        )}

        {` ${post.likes}`}
      </div>
      <div className="col-3">
        <i className="bi-share" />
      </div>
    </div>
  );
};

export default TuitStats;
