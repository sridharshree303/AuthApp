
const Logout = () => {
  sessionStorage.setItem('isUserLoggedIn',false);
  sessionStorage.clear();
  setTimeout(function(){
    alert("**Logged out Successfully..");
    window.location.assign('/');
  })
  
  return null;
}

export default Logout;
