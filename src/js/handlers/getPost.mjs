import { getPost } from "../api/posts/get.mjs";
import { renderCommentsTemplate } from "../templates/comments.mjs";
import { renderProfilePostTemplate } from "../templates/postProfile.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

/**
 * Function that will GET a single post.
 *
 * @returns Gets post by id and displays a single result.
 *
 */

export async function getSinglePost() {
  const container = document.querySelector(".parent");
  const commentsContainer = document.querySelector(".comments-container");

  try {
    let post = await getPost(id);
    post = [post];

    container.innerHTML = "";
    renderProfilePostTemplate(post, container);

    commentsContainer.innerHTML = "";
    renderCommentsTemplate(post, commentsContainer);
  } catch (error) {
    console.log(error);
    container.innerHTML = "<div><p>There was an error loading the content<p></div>" + error;
  }
}
