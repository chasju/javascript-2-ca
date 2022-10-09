import { authFetch } from "../api/authFetch.mjs";
import { API_SOCIAL_URL } from "../api/constants.mjs";
import { renderPostTemplate } from "../templates/post.mjs";

export async function filterFeedAscending() {
  const container = document.querySelector(".post-container");
  const filterOldest = document.querySelector(".ascending");

  const oldestPostsUrl = API_SOCIAL_URL + "/posts?_author=true&sort=updated&sortOrder=asc";
  const response = await authFetch(oldestPostsUrl);
  const post = await response.json();

  filterOldest.addEventListener("click", () => {
    container.innerHTML = "";
    renderPostTemplate(post, container);
  });
}

export async function filterFeedDescending() {
  const container = document.querySelector(".post-container");
  const filterOldest = document.querySelector(".descending");

  const newestPostsUrl = API_SOCIAL_URL + "/posts?_author=true&sort=updated&sortOrder=desc";
  const response = await authFetch(newestPostsUrl);
  const post = await response.json();

  filterOldest.addEventListener("click", () => {
    container.innerHTML = "";
    renderPostTemplate(post, container);
  });
}
