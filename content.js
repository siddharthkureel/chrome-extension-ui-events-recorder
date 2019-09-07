document.querySelector('body').addEventListener('click', (event) => {
    if ((event.target.localName === 'button') || (event.target.localName === 'a')){
        let occurrance = {
            type: event.target.localName,
            timeStamp: new Date(),
            value: event.target.innerHTML,
            location: window.location.href,
            event: 'click',
        }
        chrome.runtime.sendMessage(occurrance, function (response) {
        });
    }
    if (((event.target.localName === 'div') || (event.target.localName === 'span')) && (event.target.childElementCount===0)){
        let occurrance = {
            type: event.target.innerText,
            timeStamp: new Date(),
            value: event.target.innerText,
            location: window.location.href,
            event: 'click',
        }
        chrome.runtime.sendMessage(occurrance, function (response) {
        });
    }
    if (event.target.localName === 'input') {
        if (event.target.type === 'password') {
            document.getElementById(event.target.id).addEventListener('change', function (e) {
                let occurrance = {
                    type: 'Password',
                    timeStamp: new Date(),
                    value: '********',
                    location: window.location.href,
                    event: 'input',
                }
                chrome.runtime.sendMessage(occurrance, function (response) {
                });
            });
            return
        } else if (event.target.id){  
                document.getElementById(event.target.id).addEventListener('change', function (e) {
                    let occurrance = {
                        type: event.target.id,
                        timeStamp: new Date(),
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
                    type: event.target.name,
                    timeStamp: new Date(),
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
document.querySelector('body').addEventListener('keyup', (e) => {
    if (e.which === 9) {
        if (e.target.localName === 'input') {
            if (event.target.type === 'password') {
                document.getElementById(event.target.id).addEventListener('change', function (e) {
                    let occurrance = {
                        type: 'Password',
                        timeStamp: new Date(),
                        value: '********',
                        location: window.location.href,
                        event: 'input',
                    }
                    chrome.runtime.sendMessage(occurrance, function (response) {
                    });
                });
                return
            } else if(event.target.id){
                document.getElementById(e.target.id).addEventListener('change', function () {
                    let occurrance = {
                        type: e.target.id,
                        timeStamp: new Date(),
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
                        type: event.target.name,
                        timeStamp: new Date(),
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