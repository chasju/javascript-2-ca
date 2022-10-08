import * as templates from "../templates/index.mjs";
import { getPosts } from "../api/posts/get.mjs";

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
