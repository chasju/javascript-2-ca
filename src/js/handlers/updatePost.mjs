import { updatePost } from "../api/posts/put.mjs";
import { getPost } from "../api/posts/get.mjs";
import { getSinglePost } from "./getPost.mjs";

/**
 * Function will GET post based on id.
 *
 * @returns takes in the id and input information and updates post.
 */

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);
    form.body.value = post.body;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      post.title = "No title";

      await updatePost(post);
      window.location = `/pages/post/?id=${post.id}`;
    });
  }
}
