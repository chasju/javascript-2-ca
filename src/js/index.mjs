import * as handler from "./handlers/index.mjs";

const path = location.pathname;
if (path === "/pages/login/") {
  handler.setLoginFormListener();
} else if (path === "/pages/register/") {
  handler.setRegisterFormListener();
} else if (path === "/" || path === "/index.html") {
  handler.setProfilePicture();
  handler.getHomeFeedPosts();
  handler.setCreatePostListener();
  handler.searchHomeFeedPosts();
  handler.filterFeedAscending();
  handler.filterFeedDescending();
} else if (path === "/pages/profile/") {
  handler.getProfileFeedPosts();
  handler.setProfilePicture();
  handler.setCreatePostListener();
  handler.searchProfileFeedPosts();
} else if (path === "/pages/post/") {
  handler.getSinglePost();
  handler.setCreateCommentListener();
} else if (path === "/pages/edit/") {
  handler.setUpdatePostListener();
} else if (path === "/pages/profile/update/") {
  handler.setUpdateProfileListener();
}

const accessToken = localStorage.getItem("accessToken");

if (!accessToken) {
  if (path === "/pages/profile/") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.</div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
  if (path === "/pages/edit/") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.</div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
  if (path === "/pages/post/") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.</div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
  if (path === "/" || path === "/index.html") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.</div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
}
