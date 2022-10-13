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

      // Logging this to see if the button is rendered on page which it isn't all the time.
      // Been trying to play with async and await and if statements to see how I can wait until I find this button
      // but can't seem to figure it out. Would love a comment on how this is achieved.
      console.log(followButton[0]);

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

      // Logging this to see if the button is rendered on page which it isn't all the time.
      // Been trying to play with async and await and if statements to see how I can wait until I find this button
      // but can't seem to figure it out. Would love a comment on how this is achieved.
      console.log(followButton[0]);
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
