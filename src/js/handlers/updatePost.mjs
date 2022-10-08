import { updatePost } from "../api/posts/put.mjs";
import { getPost } from "../api/posts/get.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#editPost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const post = await getPost(id);
    form.body.value = post.body;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      post.title = "No title";
      console.log(post);

      updatePost(post);
    });
  }
}
