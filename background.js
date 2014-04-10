var DBG = true;

var currentTime = "";
var time;
function checkTime() {

    time = (new Date());
    var hours = time.getHours();
    var minutes = time.getMinutes();

    if(hours < 10) {
        currentTime = "0" +  hours;
    } else {
        currentTime = "" + hours;
    }

    console.log("getHours: " + currentTime);

    //currentTime += ":";

    if(minutes < 10) {
        currentTime += "0" +  minutes;
    } else {
        currentTime += "" + minutes;
    }

    console.log("show time: " + currentTime);
    chrome.browserAction.setBadgeText({text:currentTime});
}

function scheduleRequest() {
	var reqeustInterval = 1000 * 30;
	console.log("Scheduling request...");
    setInterval(checkTime, reqeustInterval);
}

checkTime();
scheduleRequest();