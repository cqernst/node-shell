var fs = require('fs');

module.exports = {
  pwd : process.stdin.on('data', function (data) {
          var cmd = data.toString().trim();
          if(cmd === 'pwd'){
            process.stdout.write(process.cwd());
          }
        process.stdout.write('\nprompt > ');
        }),
  date : process.stdin.on('data', function (data) {
          var cmd = data.toString().trim();
          if(cmd === 'date'){
            process.stdout.write(Date(Date.now()).toString());
          }
          process.stdout.write('\nprompt > ');
        }),
  ls : process.stdin.on('data', function (data) {
        var cmd = data.toString().trim();
        if(cmd === 'ls'){
          fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("\nprompt > ");
          });
        }
      }),
  echo : process.stdin.on('data', function (data) {
        var cmd = data.toString().trim().slice(0, 4);
        var text = data.toString().trim().slice(5);
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
        process.stdout.write("\nprompt > ");
      }),
}
