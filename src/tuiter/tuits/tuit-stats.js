const TuitStats = ({ replies, retuits, liked, likes }) => {
  return (
    <div className="row">
      <div className="col-3">
        <i className="bi-chat" />
        {` ${replies}`}
      </div>
      <div className="col-3">
        <i className="bi-arrow-repeat" />
        {` ${retuits}`}
      </div>
      <div className="col-3">
        {liked ? (
          <i className="bi-heart-fill" style={{ color: "red" }} />
        ) : (
          <i className="bi-heart" />
        )}

        {` ${likes}`}
      </div>
      <div className="col-3">
        <i className="bi-share" />
      </div>
    </div>
  );
};

export default TuitStats;
