import { createPost } from "../api/posts/create.mjs";
import { getHomeFeedPosts } from "../handlers/getPosts.mjs";
import { getProfileFeedPosts } from "../handlers/getPosts.mjs";

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
    await createPost(bodyText);
    input.value = "";

    if (location.pathname === "/pages/profile/") {
      await getProfileFeedPosts();
    } else {
      await getHomeFeedPosts();
    }
  });
}
