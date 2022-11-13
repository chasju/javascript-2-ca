import * as posts from "../api/posts/index.mjs";
import * as handler from "./index.mjs";

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
      await posts.createComment(comment);
      input.value = "";

      // Updates page and displays created comment

      if (location.pathname === "/pages/post/") {
        await handler.getSinglePost(id);
      }
    });
  }
}
