
const Logout = () => {
  sessionStorage.setItem('isUserLoggedIn',false);
  sessionStorage.clear();
  // alert("**Logged out Successfully..");
  window.location.assign('/');
  return null;
}

export default Logout;
