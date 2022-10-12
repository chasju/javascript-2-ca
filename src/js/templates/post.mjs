import { deletePost } from "../handlers/deletePost.mjs";

/**
 * Function will insert values from postData and is a template for how a post should look like.
 *
 * @param {object} postData
 *
 * @returns The function returns the post template and is being used in the renderPostTemplate function.
 */

export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");

  for (let i = 0; i < postData.length; i++) {
    if (i >= 20) {
      break;
    }

    // Destructuring API into variables

    const { author, body, id } = postData[i];
    let updated = postData[i].updated;
    let avatar = postData[i].author.avatar;

    // Setting placeholder for profiles without avatar

    if (!avatar) {
      avatar = "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg";
    }

    // Converting date format

    const postUpdated = new Date(updated);
    const format = { year: "numeric", month: "short", day: "numeric" };
    let updatedDate = postUpdated.toLocaleDateString("en-US", format);

    // Finding number of seconds, minutes, hours, days since post was updated

    const seconds = new Date() / 1000 - new Date(updated) / 1000;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let dateToBeUsed;

    if (days >= 2) {
      dateToBeUsed = updatedDate;
    }

    if (days <= 1 && hours > 23) {
      if (days < 2) {
        dateToBeUsed = `${days} day ago`;
      } else {
        dateToBeUsed = `${days} days ago`;
      }
    }

    if (hours > 0 && hours < 24) {
      if (hours < 2) {
        dateToBeUsed = `${hours} hour ago`;
      } else {
        dateToBeUsed = `${hours} hours ago`;
      }
    }

    if (minutes < 60 && hours < 1) {
      if (minutes < 2) {
        dateToBeUsed = `${minutes} minute ago`;
      } else {
        dateToBeUsed = `${minutes} minutes ago`;
      }
    }

    if (minutes < 1) {
      dateToBeUsed = "Updated Now";
    }

    post.innerHTML += `<div class="row bg-primary rounded-1 pt-3 pb-3 mb-4" style="--bs-bg-opacity: 0.1">
              <div class="col-1 border-0 w-25 bg-unset">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex feed-profile-pic ratio ratio-1x1" style="width:60px;">
                    <div class="mr-2">
                      <a href="#"><img class="rounded-circle" src="${avatar}" alt="thumbnail" style="width:100%;height:100%;object-fit:cover;"/></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body card-body-feed mb-3 col-7 p-0">
                <div class="ml-2 mb-1 d-flex gap-3">
                  <div class="h7 text-primary fs-6"><a href="/pages/post/?id=${id}">@${author.name}</a></div>
                  <p class="text-primary">|</p>
                  <div class="h7 text-primary">${dateToBeUsed}</div>
                </div>
                <p class="card-text">${body}</p>
                <div class="d-flex gap-3">
                  <a href="/pages/edit/?id=${id}" class="h7 text-primary edit-post">Edit</a>
                  <a href="/pages/post/?id=${id}" class="h7 text-primary edit-post">Comment</a>
                  <div id="${id}" class="h7s text-primary delete-post" role="button">Delete Post</div>
                </div>
              </div>
            </div>`;
  }

  return post;
}

/**
 * Function will render a post based on its parameters.
 *
 * @param {object, array} postData This is post information that will be inserted into its parent container
 * @param {Element} parent This is the parent container
 *
 * @returns renders the post template
 */

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));

  // Set delete function after API result is loaded
  deletePost(postData);
}
