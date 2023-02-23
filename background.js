chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: "https://www.twitter.com"};
  },
  {urls: ["https://www.roblox.com/*"]},
  ["blocking"]
);
