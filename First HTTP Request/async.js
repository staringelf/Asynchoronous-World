/*
    Ready States -
    
    0. UNSET --> client has been created, open() not called yet 

    1. OPENED --> open() has been called , (request has been set up)

    2. HEADERS_RECIEVED --> send() has been called, and headers and status are available

    3. LOADING --> Downloading; responseText holds partial data

    4. DONE --> The operation is complete

*/

(function () {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function () {
        if (this.readyState == 4 && this.status == 200){
             window.x = this.response;
             window.y = this.responseText;
             console.log(JSON.parse(x));
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send(); 

    console.log('can you see me!')

    // jQuery
    // $.get("data/preferences.json", function (data) {
    //     console.log(data);
    // })
    // console.log('hey there!')

})()

