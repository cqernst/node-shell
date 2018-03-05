var fs = require('fs');
var request = require('request');

module.exports = {
  pwd : function (file) {
          process.stdout.write(process.cwd());
        },
        // process.stdin.on('data', function (data) {
        //   var cmd = data.toString().trim();
        //   if(cmd === 'pwd'){
        //     process.stdout.write(process.cwd());
        //   }
        // process.stdout.write('\nprompt > ');
        // }),
  date : function (file) {
            process.stdout.write(Date(Date.now()).toString());
        },
  ls : function (file) {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
        })
      },
  echo : function(text) {
        // if(cmd === 'echo'){
        //   for(var key in module.exports){
        //     console.log(key)
        //     if(text === key){
        //       module.exports[key];
        //     }
        //   }
        // } else {
        //   // process.stdout.write(text);
        // }
        process.stdout.write(text);
      },
  cat : function(file) {
    fs.readFile(file, function(err, data){
      console.log(data);
    })
  },

  head : function() {
    // prints the first 10 lines
  }
}
