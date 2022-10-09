export function signOut() {
  const signOutButton = document.querySelector(".sign-out-button");

  signOutButton.addEventListener("click", () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("status");
    localStorage.removeItem("isLoggedIn");
    window.location = "/pages/login/";
  });
}
