const fs = require('fs');

fs.readFile('user-1.txt', (err, data) => {
    if(err) throw err;

    console.log(data.toString())

    var raw = data;
    var split = raw.split(";")

    document.getElementById("user-FL").innerHTML = split;
})