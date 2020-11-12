const getTodos = function (callback){
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', function () {
        if(this.readyState === 4 && this.status === 200){
            callback(false, this.responseText);
        } else if (this.readyState === 4){
            callback("Error: Couldn't fetch data", false);
        }
    })

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

getTodos(function (err, data) {
    err ? console.log(err) : console.log(data);
})

console.log('--------------------------------');


//Callback Hell

const getTodosAgain = function (resource, callback){
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', function () {
        if(this.readyState === 4 && this.status === 200){
            callback(false, this.responseText);
        } else if (this.readyState === 4){
            callback("Couldn't fetch data", false);
        }
    })

    request.open('GET', resource);
    request.send();
}

//It's not recursion, here a function is called, and then 
//the calling back function(getTodosAgain) is called inside the callback 

getTodosAgain('files/preferences.json', function (err, data) {
    if (data) {
        console.log(data);
        getTodosAgain('files/info.json', function (err, data){
            if (data) {
                console.log(data);
                getTodosAgain('files/queryy.json', function (err, data){
                    if (data) {
                        console.log(data);
                    } else{
                        console.log('Error 3: ', err);
                    }
                })
            } else {
                    console.log('Error 2', err);
            }
        })
    } else {
        console.log('Error 1:', err);
    }
})