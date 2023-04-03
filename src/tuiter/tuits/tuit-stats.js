import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = (post) => {
  const dispatch = useDispatch();

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
      <div className="col-3">
        <i
          onClick={() =>
            dispatch(
              updateTuitThunk({
                ...post,
                likes: post.likes + 1,
              })
            )
          }
          className="bi bi-heart-fill me-2 text-danger"
        ></i>
        {` ${post.likes}`}
      </div>
      <div className="col-3">
        <i className="bi-share" />
      </div>
    </div>
  );
};

export default TuitStats;
