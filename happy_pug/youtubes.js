chrome.browserAction.onClicked.addListener(function(activeTab) {
  var ytUrl="https://www.youtube.com/watch?v=XFAy84Pesb0";
  chrome.tabs.create({url: ytUrl});
})