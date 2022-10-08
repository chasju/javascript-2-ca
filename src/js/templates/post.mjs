import { removePost } from "../api/posts/delete.mjs";
import { getHomeFeedPosts } from "../handlers/getPosts.mjs";
import { getProfileFeedPosts } from "../handlers/getPosts.mjs";

export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");

  for (let i = 0; i < postData.length; i++) {
    if (i >= 20) {
      break;
    }

    // API variables
    const handle = postData[i].author.name;
    let avatar = postData[i].author.avatar;
    const date = postData[i].updated;
    const postBody = postData[i].body;
    const postId = postData[i].id;

    // Setting placeholder for profiles without avatar

    if (!avatar) {
      avatar = "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080";
    }

    // Converting date format

    const postUpdated = new Date(date);
    const format = { year: "numeric", month: "long", day: "numeric" };
    const updated = postUpdated.toLocaleDateString("en-US", format);

    post.innerHTML += `<div class="row bg-primary rounded-1 pt-3 pb-3 mb-4" style="--bs-bg-opacity: 0.1">
              <div class="col-1 border-0 w-25 bg-unset">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex feed-profile-pic" style="width:50px;height:50px;">
                    <div class="mr-2">
                      <a href="/pages/profile/"><img class="rounded-circle" width="50" src="${avatar}" alt="thumbnail" style="width:100%;height:100%;object-fit:cover;"/></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body card-body-feed mb-3 col-7 p-0">
                <div class="ml-2 mb-1 d-flex gap-3">
                  <div class="h7 text-primary fs-6">@${handle}</div>
                  <p class="text-primary">|</p>
                  <div class="h7 text-primary">${updated}</div>
                </div>
                <p class="card-text">${postBody}</p>
                <div class="d-flex gap-3">
                  <a href="/pages/edit/?id=${postId}" class="h7 text-primary edit-post">Edit</a>
                  <div id="${postId}" class="h7s text-primary delete-post">Delete Post</div>
                </div>
              </div>
            </div>`;
  }

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));

  // Set delete function after API result is loaded
  const deleteButton = document.querySelectorAll(".delete-post");

  deleteButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      removePost(e.target.id);
      if (location.pathname === "/pages/profile/") {
        getProfileFeedPosts();
      } else {
        getHomeFeedPosts();
      }
    });
  });
}
