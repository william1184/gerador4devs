
(function() {
	if (window.hasRun) {
		return;
	}
	window.hasRun = true;
    
    let selectedElement = null;
    document.body.addEventListener("contextmenu", function(event){
        selectedElement = event.target;
    }, true);


    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

        if(request.id == 'change_value'){
            selectedElement.value = request.retorno;
        }
    });
})();
