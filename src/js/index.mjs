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

const path = location.pathname;

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
} else {
  setProfilePicture();
  setCreatePostListener();
  getHomeFeedPosts();
  searchHomeFeedPosts();
  signOut();
  filterFeedAscending();
  filterFeedDescending();
}
