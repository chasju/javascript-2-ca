/**
 * Function will insert values from postData and is a template for how a comment should look like.
 *
 * @param {object} postData
 *
 * @returns The function returns the comment template and is being used in the renderCommentsTemplate function.
 */

export function commentsTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add("post");

  // Destructuring API into variables

  const { comments } = postData[0];

  for (let i = 0; i < comments.length; i++) {
    let updated = comments[i].created;

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

    post.innerHTML += `<div class="row bg-primary rounded-1 pt-3 pb-3 mb-4" style="--bs-bg-opacity: 0.3">
            <div class="card-body card-body-feed ms-5 mb-3 col-7 p-0">
              <div class="ml-2 mb-1 d-flex gap-3">
                <div class="h7 text-primary">${comments[i].owner}</div>
                <p class="text-primary">|</p>
                <div class="h7 text-primary">${dateToBeUsed}</div>
              </div>
              <p class="card-text">${comments[i].body}</p>
            </div>
          </div>`;
  }

  return post;
}

/**
 * Function will render a comment based on its parameters.
 *
 * @param {object, array} postData This is post information that will be inserted into its parent container
 * @param {Element} parent This is the parent container
 *
 * @returns renders the post template
 */

export function renderCommentsTemplate(postData, parent) {
  parent.append(commentsTemplate(postData));
}
