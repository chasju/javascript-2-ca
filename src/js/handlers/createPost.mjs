import * as posts from "../api/posts/index.mjs";
import * as handler from "../handlers/index.mjs";

/**
 * Function with create post listener.
 *
 * @returns Listens for a button and creates post.
 *
 */

export async function setCreatePostListener() {
  const button = document.querySelector(".submit-post");
  const input = document.querySelector("textarea");

  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const bodyText = {
      title: "No title",
      body: input.value,
    };
    await posts.createPost(bodyText);
    input.value = "";

    if (location.pathname === "/pages/profile/") {
      await handler.getProfileFeedPosts();
    } else {
      await handler.getHomeFeedPosts();
    }
  });
}
