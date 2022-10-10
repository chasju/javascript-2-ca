import { createPost } from "../api/posts/create.mjs";
import { getHomeFeedPosts } from "../handlers/getPosts.mjs";
import { getProfileFeedPosts } from "../handlers/getPosts.mjs";

/**
 * Function with create post listener.
 *
 * @returns Listens for a button and creates post.
 *
 */

export function setCreatePostListener() {
  const button = document.querySelector(".submit-post");
  const input = document.querySelector("textarea");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    const bodyText = {
      title: "No title",
      body: input.value,
    };
    createPost(bodyText);
    input.value = "";

    if (location.pathname === "/pages/profile/") {
      setTimeout(getProfileFeedPosts, 300);
    } else {
      setTimeout(getHomeFeedPosts, 300);
    }
  });
}
