import { authFetch } from "./api/authFetch.mjs";
import { API_SOCIAL_URL } from "./api/constants.mjs";
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
                    <div class="container"><a href="/pages/login/">Log In Here</a></div>`;
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

async function test() {
  // the token I got back when logging in didn't work but this does.
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYyLCJuYW1lIjoiY2hhc2p1IiwiZW1haWwiOiJDaGFTanU2Nzc1OEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiYmFubmVyIjpudWxsLCJpYXQiOjE2NjQ3ODM3MTR9.S2OKBLIiacflwE4nf1qhEs5CXzUZktP1_uzjkPU-Ywo";
  console.log(token);
  const testURL = `${API_SOCIAL_URL}/posts/251/react/🎈`;
  const response = await fetch(testURL, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: {},
  });

  const result = await response.json();

  console.log(result);
}

test();
