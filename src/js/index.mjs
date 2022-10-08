import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setUpdatePostListener } from "./handlers/updatePost.mjs";
import { setCreatePostListener } from "./handlers/createPost.mjs";
import { getHomeFeedPosts, getProfileFeedPosts } from "./handlers/getPosts.mjs";

const path = location.pathname;

if (path === "/pages/register/") {
  setRegisterFormListener();
} else if (path === "/pages/login/") {
  setLoginFormListener();
} else if (path === "/pages/profile/") {
  setCreatePostListener();
  getProfileFeedPosts();
} else if (path === "/pages/edit/") {
  setUpdatePostListener();
} else {
  setCreatePostListener();
  getHomeFeedPosts();
}
