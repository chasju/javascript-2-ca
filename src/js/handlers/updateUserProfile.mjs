import * as profiles from "../api/profiles/index.mjs";
import * as storage from "../storage/index.mjs";

/**
 * Function will GET profile
 *
 * @returns takes in the id and input information and updates post.
 */

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");
  let profilePicture = document.querySelector(".profile-picture");

  if (form) {
    const name = storage.load("isLoggedIn");

    const profile = await profiles.getProfile(name);
    profilePicture.innerHTML = `<img src="${profile.avatar}" alt="profile picture" class="img-fluid border border-secondary border-5 rounded-circle card-profile-pic-profile" style="--bs-border-opacity: 0.4; width: 100%; height: 100%; object-fit: cover">`;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());
      profile.name = name;

      await profiles.updateProfile(profile);
      window.location = "/pages/profile/update/";
    });
  }
}
