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

browser.runtime.onMessage.addListener(propertyObject =>{
    
    browser.downloads.download({
        url : propertyObject.imageUrl,
        filename : `${propertyObject.id}/${propertyObject.id}.jpg`,
        conflictAction : 'uniquify'
    });
    downloadObjectAsJson(propertyObject)
    
});

function sendMessage(info, tab) {
    chrome.tabs.query(
        {active: true, currentWindow: true }, 
        function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, info.targetElementId);
        }
    );
}


function downloadObjectAsJson(exportObj){
    var json = JSON.stringify(exportObj);
    var blob = new Blob([json], {type: "application/json"});
    var url  = URL.createObjectURL(blob);
    browser.downloads.download({
        url : url,
        filename : `${exportObj.id}/${exportObj.id}.json`,
        conflictAction : 'uniquify'
    });
}

