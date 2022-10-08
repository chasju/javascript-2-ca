import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

export async function getHomeFeedPosts() {
  try {
    const posts = await postMethods.getPosts();
    const container = document.querySelector(".post-container");
    container.innerHTML = "";

    templates.renderPostTemplate(posts, container);
  } catch (error) {
    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}

export async function getProfileFeedPosts() {
  try {
    const posts = await postMethods.getPosts();
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
