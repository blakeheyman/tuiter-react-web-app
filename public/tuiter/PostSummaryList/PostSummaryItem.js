const PostSummaryItem = (post) => {
  return `
    <li class="list-group-item">
    <img src="${post.image}" width="72px" class="float-end rounded" />
    <div class="text-muted">${post.topic}</div>
    <div>
      <b class="text-white">${post.userName}</b>
      <i class="fa fa-check-circle text-white"></i>
      <span class="text-muted">- ${post.time}</span>
    </div>
    <div>
      <b class="text-white">${post.title}</b>
    </div>
  </li>
    `;
};

export default PostSummaryItem;
