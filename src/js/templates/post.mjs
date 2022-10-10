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

    const { author, updated, body, id } = postData[i];

    // Setting placeholder for profiles without avatar

    if (!author.avatar) {
      author.avatar = "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080";
    }

    // Converting date format

    const postUpdated = new Date(updated);
    const format = { year: "numeric", month: "long", day: "numeric" };
    const updatedDate = postUpdated.toLocaleDateString("en-US", format);

    post.innerHTML += `<div class="row bg-primary rounded-1 pt-3 pb-3 mb-4" style="--bs-bg-opacity: 0.1">
              <div class="col-1 border-0 w-25 bg-unset">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex feed-profile-pic" style="width:50px;height:50px;">
                    <div class="mr-2">
                      <a href="#"><img class="rounded-circle" width="50" src="${author.avatar}" alt="thumbnail" style="width:100%;height:100%;object-fit:cover;"/></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body card-body-feed mb-3 col-7 p-0">
                <div class="ml-2 mb-1 d-flex gap-3">
                  <div class="h7 text-primary fs-6"><a href="/pages/post/?id=${id}">@${author.name}</a></div>
                  <p class="text-primary">|</p>
                  <div class="h7 text-primary">${updatedDate}</div>
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
