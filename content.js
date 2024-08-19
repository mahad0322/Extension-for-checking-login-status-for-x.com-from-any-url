function checkLoginStatus() {
  const observer = new MutationObserver(() => {
    const signInButton = document.querySelector('#react-root > div > div > div.css-175oi2r.r-1f2l425.r-13qz1uu.r-417010 > main > div > div > div.css-175oi2r.r-tv6buo > div > div > div.css-175oi2r > div.css-175oi2r.r-2o02ov > a > div > span > span');
    
    if (signInButton) {
      console.log('Sign-in button found');
      chrome.storage.local.set({ loginStatus: 'User is not logged in' }, function() {
        console.log('Login status set to "User isS not logged in"');
      });
      observer.disconnect(); 
    } else {
      console.log('Sign-in button not found');
      chrome.storage.local.set({ loginStatus: 'User is logged in' }, function() {
        console.log('Login status set to "User is logged in"');
      });
    }
  });

  
  observer.observe(document.body, { childList: true, subtree: true });
}

checkLoginStatus();
