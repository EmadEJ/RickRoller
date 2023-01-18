console.log("I'm ready")
const rickify = document.getElementById('rickify');
rickify.addEventListener('click', )

function textChanged(event) {
    console.log("text changed to: " + textInput.value);
    
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, function(tabs) {
        msg = {
            sender: "popup",
            txt: textInput.value
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    })
}

function rollmessage(event) {
    console.log("I'm gonna rickify!");

    let params
}