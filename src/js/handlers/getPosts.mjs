import * as templates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";

/**
 * Function that will GET all post for Homepage.
 *
 * @returns returns all posts.
 *
 */

export async function getHomeFeedPosts() {
  try {
    const post = await posts.getPosts();
    const container = document.querySelector(".post-container");
    container.innerHTML = "";

    templates.renderPostTemplate(post, container);
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
  const container = document.querySelector(".profile-container");

  try {
    const post = await posts.getPosts();
    const userLoggedIn = localStorage.getItem("isLoggedIn");

    const filteredPosts = post.filter((profilePost) => {
      if (JSON.stringify(profilePost.author.name) === userLoggedIn) {
        return true;
      }
    });

    container.innerHTML = "";

    templates.renderProfilePostTemplate(filteredPosts, container);
  } catch (error) {
    noPostsMessage(container);
    console.log(error);
  }
}
