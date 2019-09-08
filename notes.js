let events = [];
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if(request.type==='a'){
            request.type = 'link'
        }
        events.push(request)
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = request.type
        cell2.innerHTML = request.timeStamp
        cell3.innerHTML = request.value
        cell4.innerHTML = request.location
        cell5.innerHTML = request.event
    }
);
document.querySelector('#download').addEventListener('click', function () {
    if(events.length<1){
        return alert('no events')
    }
    var download = document.getElementById('download');
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ events }));
    download.href = 'data:' + data;
    download.download = 'data.json';
})
