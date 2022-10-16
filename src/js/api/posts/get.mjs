import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const action = "/posts";

/**
 * Function will take GET 300 posts from API.
 * 
 * @returns returns all posts
 * @example
 * ```js
 * async function getAllPosts() {
 *  const posts = await getPosts();
    console.log(posts)
 * }
 * ```
 */

export async function getPosts() {
  const getPostsURL = `${API_SOCIAL_URL}${action}?_author=true&sort=updated&sortOrder=desc&limit=1000`;

  const response = await authFetch(getPostsURL);

  const posts = await response.json();
  return posts;
}

/**
 * Function will GET a single post based on ID provided.
 * 
 * @param {number} id This is the id information provided based on API post id

 * @returns returns one post from API results.
 * @example
 * ```js
 * async function getOnePost() {
 *  const post = await getPost(id);
    console.log(post)
 * }
 * ```
 */

export async function getPost(id) {
  if (!id) {
    throw new Error("Get requires post ID");
  }

  const getPostURL = `${API_SOCIAL_URL}${action}/${id}?_author=true`;

  const response = await authFetch(getPostURL);

  const post = await response.json();
  return post;
}

/**
 * Function will GET profile of logged in user.
 *
 *
 * @returns returns profile API results.
 * @example
 * ```js
 * async function getOnePost() {
 *  const profile = await getProfile();
 *  console.log(profile)
 * }
 * ```
 */

export async function getProfile() {
  const name = load("isLoggedIn");

  const getProfileURL = `${API_SOCIAL_URL}/profiles/${name}`;

  const response = await authFetch(getProfileURL);

  const profile = await response.json();
  return profile;
}
