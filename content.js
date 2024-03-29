document.querySelector('body').addEventListener('click', (event) => {
    let id = event.path.pop();
    let hierarchy = 'Main body';
    if (id.name !== '') {
        hierarchy = id.name;
    } 
    event.path.forEach((element) => {
        if (element.localName === 'a') {
            let occurrance = {
                type: 'a',
                timeStamp: new Date(),
                frame: hierarchy,
                value: element.href,
                location: window.location.href,
                event: 'click',
            }
            chrome.runtime.sendMessage(occurrance, function (response) {
            });
        }
    })
    if ((event.target.localName === 'button') && (event.target.childElementCount === 0)) {
        let occurrance = {
            type: event.target.localName,
            timeStamp: new Date(),
            frame:hierarchy,
            value: event.target.innerText,
            location: window.location.href,
            event: 'click',
        }
        chrome.runtime.sendMessage(occurrance, function (response) {
        });
    }
     else if (event.target.localName === 'input') {
        if (event.target.type === 'password') {
            document.getElementById(event.target.id).addEventListener('change', function (e) {
                let occurrance = {
                    type: 'Password',
                    timeStamp: new Date(),
                    frame: hierarchy,
                    value: '********',
                    location: window.location.href,
                    event: 'input',
                }
                chrome.runtime.sendMessage(occurrance, function (response) {
                });
            });
        } else if (event.target.id) {
            document.getElementById(event.target.id).addEventListener('change', function (e) {

                let occurrance = {
                    type: e.target.id,
                    timeStamp: new Date(),
                    frame: hierarchy,
                    value: e.target.value,
                    location: window.location.href,
                    event: 'input',
                }
                chrome.runtime.sendMessage(occurrance, function (response) {
                });
            });
        } else {
            document.querySelector(`input[name=${event.target.name}]`).addEventListener('change', function (e) {
                let occurrance = {
                    type: e.target.name,
                    timeStamp: new Date(),
                    frame: hierarchy,
                    value: e.target.value,
                    location: window.location.href,
                    event: 'input',
                }
                chrome.runtime.sendMessage(occurrance, function (response) {
                });
            })
        }
    }
})
//when user press tab key
document.querySelector('body').addEventListener('keyup', (event) => {
    let id = event.path.pop();
    let hierarchy = 'Main body';
    if (id.name !== '') {
        hierarchy = id.name;
    } 
    if (event.which === 9) {
        if (event.target.localName === 'input') {
            if (event.target.type === 'password') {
                document.getElementById(event.target.id).addEventListener('change', function (e) {
                    let occurrance = {
                        type: 'Password',
                        timeStamp: new Date(),
                        frame:hierarchy,
                        value: '********',
                        location: window.location.href,
                        event: 'input',
                    }
                    chrome.runtime.sendMessage(occurrance, function (response) {
                    });
                });
            } else if (event.target.id) {
                document.getElementById(event.target.id).addEventListener('change', function (e) {
                    let occurrance = {
                        type: e.target.id,
                        timeStamp: new Date(),
                        frame:hierarchy,
                        value: e.target.value,
                        location: window.location.href,
                        event: 'input',
                    }
                    chrome.runtime.sendMessage(occurrance, function (response) {
                    });
                })
            } else {
                document.querySelector(`input[name=${event.target.name}]`).addEventListener('change', function (e) {
                    let occurrance = {
                        type: e.target.name,
                        timeStamp: new Date(),
                        frame:hierarchy,
                        value: e.target.value,
                        location: window.location.href,
                        event: 'input',
                    }
                    chrome.runtime.sendMessage(occurrance, function (response) {
                    });
                })
            }
        }
    }
})
console.log('ui recorder is running')