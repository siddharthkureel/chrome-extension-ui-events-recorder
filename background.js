chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.windows.create({ type: 'popup',url: chrome.extension.getURL('notes.html') });
});