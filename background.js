browser.menus.create({
    id: "bnb-download",
    title: "download",
    contexts: ["link"]
  });
   
browser.menus.onClicked.addListener(async function (info, tab) {
    if (info.menuItemId === "bnb-download") {
        sendMessage(info, tab);
    }
});

browser.runtime.onMessage.addListener(imageURL =>{
    browser.downloads.download({
        url : imageURL,
        filename : `images/${new Date().getTime()}.jpg`,
        conflictAction : 'uniquify'
    });
});

function sendMessage(info, tab) {
    chrome.tabs.query(
        {active: true, currentWindow: true }, 
        function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, info.targetElementId);
        }
    );
}

