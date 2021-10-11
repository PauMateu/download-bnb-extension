browser.runtime.onMessage.addListener(function(targetElementId) {
    let elem = browser.menus.getTargetElement(targetElementId);
    if(elem){
        // downloadObjectAsJson({"hello":"hello"}, "hello")

        let imageUrl = elem.parentElement.querySelector("source").getAttribute("srcset").split("?")[0];
        
        let location = elem.parentElement.querySelector("._1xzimiid").textContent;
        let title = elem.parentElement.querySelector("._1whrsux9").textContent;
        let price = elem.parentElement.querySelector("._tyxjp1").textContent;
        let rating = elem.parentElement.querySelector("._10fy1f8").textContent;
        
        let id = elem.getAttribute("aria-labelledby").split("_")[1];

        let propertyObject = {
            imageUrl,
            location,
            title,
            price,
            rating,
            id
        }

        console.log(propertyObject);
        //send message to background script to downlaod the image
        browser.runtime.sendMessage(propertyObject)
    }

});

// function downloadObjectAsJson(exportObj, exportName){
//     console.log("downloading")
//     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
//     var downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href",     dataStr);
//     downloadAnchorNode.setAttribute("download", "images/"+exportName + ".json");
//     document.body.appendChild(downloadAnchorNode); // required for firefox
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
//   }
