import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { getHomeFeedPosts } from "./handlers/getPosts.mjs";
import { getProfileFeedPosts } from "./handlers/getPosts.mjs";

const path = location.pathname;

if (path === "/pages/register/") {
  setRegisterFormListener();
} else if (path === "/pages/login/") {
  setLoginFormListener();
} else if (path === "/pages/profile/") {
  getProfileFeedPosts();
} else {
  getHomeFeedPosts();
}
