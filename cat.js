const fs = require('fs'); 

function cat (fileName) {

    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();

        if (cmd === `cat fileName`) {
            fs.readFile(fileName, function(err, file){
                if (err){
                    throw err; 
                } else {
                    process.stdout.write(file.toString());
                    process.stdout.write('prompt > ');
                }
            })
        }
    });
}

module.exports = cat;