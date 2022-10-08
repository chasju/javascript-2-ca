import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { getHomeFeedPosts } from "../../handlers/getPosts.mjs";
import { getProfileFeedPosts } from "../../handlers/getPosts.mjs";

const action = "/posts";

export async function createPost(postData) {
  try {
    const createPostURL = `${API_SOCIAL_URL}${action}`;

    const response = await authFetch(createPostURL, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    const post = await response.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
}

const button = document.querySelector(".submit-post");
const input = document.querySelector("textarea");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const bodyText = {
    title: "No title",
    body: input.value,
  };
  createPost(bodyText);
  input.value = "";

  if (location.pathname === "/pages/profile/") {
    getProfileFeedPosts();
  } else {
    getHomeFeedPosts();
  }
});
