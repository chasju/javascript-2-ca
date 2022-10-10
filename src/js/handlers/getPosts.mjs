import * as templates from "../templates/index.mjs";
import { getPosts } from "../api/posts/get.mjs";

/**
 * Function that will GET all post for Homepage.
 *
 * @returns returns all posts.
 *
 */

export async function getHomeFeedPosts() {
  try {
    const posts = await getPosts();
    const container = document.querySelector(".post-container");
    container.innerHTML = "";

    templates.renderPostTemplate(posts, container);
  } catch (error) {
    const container = document.querySelector(".post-container");

    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}

/**
 * Function that will GET all post for Profile page.
 *
 * @returns Filters through all the posts and returns posts from logged in user.
 *
 */

export async function getProfileFeedPosts() {
  try {
    const posts = await getPosts();
    const user = localStorage.getItem("isLoggedIn");

    const filteredPosts = posts.filter((post) => {
      if (JSON.stringify(post.author.name) === user) {
        return post;
      }
    });

    const container = document.querySelector(".profile-container");
    container.innerHTML = "";

    templates.renderPostTemplate(filteredPosts, container);
  } catch (error) {
    container.innerHTML = "There was an error loading your feed" + error;
    console.log(error);
  }
}
