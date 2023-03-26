const WhoToFollowListItem = (who) => {
  return `
  <li class="list-group-item">
  <img src='../../images/${who.avatarIcon}' width="48px" class="float-start rounded-circle me-2" />
  <button class="btn btn-primary rounded-pill float-end mt-1">Follow</button>
  <div class="fw-bold text-white">
    ${who.userName}
    <i class="fa fa-check-circle"></i>
  </div>
  <div class=text-white>@${who.handle}</div>
</li>`;
};

export default WhoToFollowListItem;
