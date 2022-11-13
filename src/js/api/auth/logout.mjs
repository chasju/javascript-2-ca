/**
 * Function will log out in user and remove API result
 * from localStorage.
 *
 * @returns returns nothing but sends the user to /pages/login/
 *
 */

export function signOut() {
  const signOutButton = document.querySelector(".sign-out-button");

  signOutButton.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("status");
    localStorage.removeItem("isLoggedIn");
    window.location = "/pages/login/";
  });
}
