import { createComment } from "../api/posts/create.mjs";
import { getSinglePost } from "./getPost.mjs";

/**
 * Function with create comment listener.
 *
 * @returns Listens for a button and comments a post.
 *
 */

export async function setCreateCommentListener() {
  const form = document.querySelector("#commentPost");
  const input = document.querySelector("textarea");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const comment = {
        body: input.value,
      };
      comment.id = id;
      await createComment(comment);
      input.value = "";

      // Updates page and displays created comment

      if (location.pathname === "/pages/post/") {
        await getSinglePost(id);
      }
    });
  }
}
