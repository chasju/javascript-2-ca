import { getProfile } from "../api/posts/get.mjs";

/**
 * Function will GET profile API results and set profile picture.
 *
 */

export async function setProfilePicture() {
  try {
    const profile = await getProfile();
    const { name, _count } = profile;
    let avatar = profile.avatar;
    const bioContainer = document.querySelector(".bio-container");

    if (!avatar) {
      avatar = "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg";
    }

    if (location.pathname === "/pages/profile/") {
      bioContainer.innerHTML = `<div class="row flex-sm-column">
              <div class="col mb-4 mt-5 px-0 profile-picture placeholder-glow ratio ratio-1x1"><a href="/pages/profile/"><img src="${avatar}" alt="profile picture" class="img-fluid border border-secondary border-5 rounded-circle card-profile-pic-profile" style="--bs-border-opacity: 0.4;width:100%;height:100%;object-fit:cover;"></a></div>
              <div class="col text-start align-self-end">
                <h3 class="text-primary fs-4 fw-bold mb-3">${name}</h3>
                <p class="text-primary fw-light mb-0">Posts: ${_count.posts}</p>
                <p class="text-primary fw-light mb-0">Followers: ${_count.followers}</p>
                <p class="text-primary fw-light mb-0">Follows: ${_count.following}</p>
              </div>
            </div>`;
    }

    if (location.pathname === "/" || location.pathname === "/index.html") {
      const pictureContainer = document.querySelector(".profile-picture");

      pictureContainer.innerHTML = `<a href="/pages/profile/"><img src="${avatar}" alt="profile picture" class="img-fluid border border-5 border-secondary rounded-circle" style="--bs-border-opacity: 0.4;width:100%;height:100%;object-fit:cover;"></a>`;
    }
  } catch (error) {
    const container = document.querySelector(".post-container");

    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}
