import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { signOut } from "./api/auth/logout.mjs";
import { setUpdatePostListener } from "./handlers/updatePost.mjs";
import { setCreatePostListener } from "./handlers/createPost.mjs";
import { getHomeFeedPosts, getProfileFeedPosts } from "./handlers/getPosts.mjs";
import { searchHomeFeedPosts } from "./handlers/searchPosts.mjs";
import { searchProfileFeedPosts } from "./handlers/searchPosts.mjs";
import { setProfilePicture } from "./handlers/setProfilePicture.mjs";
import { filterFeedAscending, filterFeedDescending } from "./handlers/filterFeed.mjs";
import { getSinglePost } from "./handlers/getPost.mjs";

const path = location.pathname;

const accessToken = localStorage.getItem("accessToken");

if (!accessToken) {
  if (path === "/pages/profile/") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.<div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
  if (path === "/pages/edit/") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.<div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
  if (path === "/pages/post/") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.<div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
  if (path === "/") {
    const body = document.querySelector("main");
    body.innerHTML = `<div class="container mt-5 text-primary h3">You are not logged in.<div>
                    <div><a href="/pages/login/">Log In Here</a></div>`;
  }
}

if (path === "/pages/register/") {
  setRegisterFormListener();
} else if (path === "/pages/login/") {
  setLoginFormListener();
} else if (path === "/pages/profile/") {
  setCreatePostListener();
  getProfileFeedPosts();
  searchProfileFeedPosts();
  setProfilePicture();
  signOut();
} else if (path === "/pages/edit/") {
  setUpdatePostListener();
} else if (path === "/pages/post/") {
  getSinglePost();
} else {
  setProfilePicture();
  setCreatePostListener();
  getHomeFeedPosts();
  searchHomeFeedPosts();
  signOut();
  filterFeedAscending();
  filterFeedDescending();
}
