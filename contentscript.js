browser.runtime.onMessage.addListener(function(targetElementId) {
    let elem = browser.menus.getTargetElement(targetElementId);
    if(elem){
        let imageUrl = elem.parentElement.querySelector("source").getAttribute("srcset").split("?")[0];
        console.log(imageUrl);
        //send message to background script to downlaod the image
        browser.runtime.sendMessage(imageUrl)
    }

});