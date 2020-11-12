const getTodos = function (){
    return new Promise (function (resolve, reject) {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', function () {
            if(this.readyState === 4 && this.status === 200){
                resolve(this.responseText);
            } else if (this.readyState === 4){
                reject("Error: Couldn't fetch data");
            }
        })

        request.open('GET', 'files/preferences.json');
        request.send();
        })
}

getTodos()
    .then(function (data) {
    console.log(data);
})  .catch(function (err) {
    console.log(err);
})

// getTodos().then(function (data){
//             console.log(data);
//         }, function (err){
//             console.log(err);
//         })



console.log('--------------------------------'); //watch where it happens


//Chains

const getTodosAgain = function (resource){
    const request = new XMLHttpRequest();
    
    return new Promise( function (resolve, reject) {
        request.addEventListener('readystatechange', function () {
            if(this.readyState === 4 && this.status === 200){
                resolve(this.responseText);
            } else if (this.readyState === 4){
                reject("Error: Couldn't fetch data!");
            }
        })

        request.open('GET', resource);
        request.send();
    });
}

//It's not recursion, here a function is called, and then 
//the calling back function(getTodosAgain) is called inside the callback 

getTodosAgain('files/preferences.json')
    .then(function (data){
        console.log('Promise 1: ',data);
        return getTodosAgain('files/info.json');
    })
    .then(function (data){
        console.log('Promise 2: ', data);
        return getTodosAgain('files/query.json');
    })
    .then(function (data){
        console.log('Promise 3: ', data);
    })
    .catch(function (err){
        console.log(err);
    })
  