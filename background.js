chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch(request.type) {
    case "dom-loaded":
      alert(request.data.myProperty);
      break;
    }
    return true;
  });

  
