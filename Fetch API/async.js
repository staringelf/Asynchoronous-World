fetch('files/info.json').then(function (response) {
   // console.log('Resolved: ', response);
    return response.json(); //returns the parsed data
}).then(function (data) {
    console.log(data);
})
.catch(function (err){
    console.log('Rejected: ', err);
});