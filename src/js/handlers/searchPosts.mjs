import { getPosts } from "../api/posts/get.mjs";
import * as templates from "../templates/index.mjs";

/**
 * Function that will search through Home feed posts.
 *
 * @returns const filterPosts will return posts that include input value.
 * If there are no posts matching
 * filterPosts will return all posts.
 * @example
 * ```js
 * if (post.includes(input.value)) {
 * return post;
 * }
 * if (input = "")) {
 * return posts;
 * }
 * ```
 */

export async function searchHomeFeedPosts() {
  try {
    const posts = await getPosts();
    const searchInput = document.querySelector("#searchHomePage");
    const searchForm = document.querySelector("#searchForm");
    const container = document.querySelector(".post-container");

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const filterPosts = posts.filter((post, i, posts) => {
        const handle = post.author.name.toLowerCase();
        const body = post.body.toLowerCase();

        if (handle.includes(searchInput.value.toLowerCase()) || body.includes(searchInput.value.toLowerCase())) {
          return post;
        }
        if (searchInput === "") {
          return posts;
        }
      });
      container.innerHTML = "";
      templates.renderPostTemplate(filterPosts, container);
    });
  } catch (error) {
    const container = document.querySelector(".post-container");

    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}

/**
 * Function that will search through profile feed posts.
 *
 * @returns const filteredPosts return all posts for logged in user.
 * const filterPosts will return posts
 * that include input value. If there are no posts matching
 * filterPosts will return all posts.
 * @example
 * ```js
 * if (post.includes(input.value)) {
 * return post;
 * }
 * if (input = "")) {
 * return posts;
 * }
 * ```
 */

export async function searchProfileFeedPosts() {
  const container = document.querySelector(".profile-container");

  try {
    const posts = await getPosts();
    const user = localStorage.getItem("isLoggedIn");
    const searchInput = document.querySelector("#searchProfilePage");
    const searchForm = document.querySelector("#searchForm");

    const filteredPosts = posts.filter((post) => {
      if (JSON.stringify(post.author.name) === user) {
        return post;
      }
    });

    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const filterPosts = filteredPosts.filter((post, i, filteredPosts) => {
        const handle = post.author.name.toLowerCase();
        const body = post.body.toLowerCase();

        if (handle.includes(searchInput.value.toLowerCase()) || body.includes(searchInput.value.toLowerCase())) {
          return post;
        }
        if (searchInput === "") {
          return filteredPosts;
        }
      });

      container.innerHTML = "";
      templates.renderPostTemplate(filterPosts, container);
    });
  } catch (error) {
    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}
