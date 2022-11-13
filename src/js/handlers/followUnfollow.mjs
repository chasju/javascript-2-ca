import { getPosts } from "../api/posts/get.mjs";
import { follow, unFollow } from "../api/posts/put.mjs";

/**
 * Function that will listen for a Follow Button click
 *
 * @returns Will add target to your followers list
 */

export async function setFollowListener() {
  try {
    const posts = await getPosts();
    if (await posts) {
      const followButton = document.querySelectorAll(".follow");

      followButton.forEach((button) => {
        button.addEventListener("click", async (e) => {
          await follow(e.target.id);
          console.log(`You followed ${e.target.id}`);
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * Function that will listen for an unFollow Button click
 *
 * @returns Will remove target from your followers list
 */

export async function setUnFollowListener() {
  try {
    const posts = await getPosts();
    if (await posts) {
      const followButton = document.querySelectorAll(".unFollow");

      followButton.forEach((button) => {
        button.addEventListener("click", async (e) => {
          await unFollow(e.target.id);
          console.log(`You unfollowed ${e.target.id}`);
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}
