import { getProfile } from "../api/posts/get.mjs";

export async function setProfilePicture() {
  try {
    const profile = await getProfile();
    const pictureContainer = document.querySelector(".profile-picture");

    if (!profile.avatar) {
      profile.avatar = "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080";
    }

    if (location.pathname === "/pages/profile/") {
      pictureContainer.innerHTML = `<img src="${profile.avatar}" alt="" class="img-fluid border border-secondary border-5 rounded-circle card-profile-pic-profile" style="--bs-border-opacity: 0.4">`;
    } else {
      pictureContainer.innerHTML = `<img src="${profile.avatar}" alt="profile picture" class="img-fluid border border-5 border-secondary rounded-circle" style="--bs-border-opacity: 0.4">`;
    }
  } catch (error) {
    const container = document.querySelector(".post-container");

    container.innerHTML = "There was an error loading the feed" + error;
    console.log(error);
  }
}
