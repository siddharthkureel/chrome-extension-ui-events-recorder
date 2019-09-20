chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.create({ type: 'popup',url: chrome.extension.getURL('notes.html') });
});
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
    if (request.occurrance!==undefined){
          console.log('running')
      }
});