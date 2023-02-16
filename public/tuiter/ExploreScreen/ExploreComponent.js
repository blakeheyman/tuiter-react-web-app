import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
    <div class="input-group mb-2">
    <span class="input-group-text bg-white rounded-pill rounded-end border-end-0">
      <i class="fa fa-search text-muted"></i>
    </span>
    <input type="text" class="form-control rounded-pill rounded-start border-start-0"
      placeholder="Search Tuiter" />
    <button class="btn btn-link">
      <i class="fa fa-lg fa-cog"></i>
    </button>
  </div>
  <ul class="nav nav-tabs mb-2">
  <li class="nav-item">
    <a class="nav-link active" href="#">For you</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Trending</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">News</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Sports</a>
  </li>
  <li class="nav-item d-none d-md-block">
    <a class="nav-link" href="#" tabindex="-1">Entertainment</a>
  </li>
</ul>
<div class="position-relative mb-2">
  <img src="../../images/starship.jpg" width="100%" />
  <h1 class="text-light fw-bold position-absolute bottom-0 px-2">SpaceX's Starship</h1>
</div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
