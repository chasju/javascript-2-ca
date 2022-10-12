export function noPostsMessage(container) {
  return (container.innerHTML = `<div><p class="text-primary">The posts you create will be displayed here</p></div>`);
}

export function emptyFeedMessage(container) {
  return (container.innerHTML = `<div><p class="text-primary">The posts you and your friends create will be displayed here</p></div>`);
}
