import { removePost } from "../api/posts/delete.mjs";
import { getHomeFeedPosts, getProfileFeedPosts } from "./getPosts.mjs";

/**
 * Function with delete post listener.
 *
 * @returns Listens for a button and deletes post for targets id.
 *
 */

export function deletePost() {
  const deleteButton = document.querySelectorAll(".delete-post");

  deleteButton.forEach((button) => {
    button.addEventListener("click", async (e) => {
      await removePost(e.target.id);
      if (location.pathname === "/pages/profile/") {
        await getProfileFeedPosts();
      } else {
        await getHomeFeedPosts();
      }
    });
  });
}
