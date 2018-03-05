const commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
    var cmd = data.toString().trim();
    if (data.toString().trim().slice(0,4) === 'echo') {
    	cmd = 'echo';
    }
    if (cmd === 'echo') {
    	var text = data.toString().trim().slice(5);
    	commands.echo(text);
    } else {
    	for (var key in commands) {
	    if (cmd === key) {
	    		commands[key]();
	    	}
    	}
	}
    
   
    process.stdout.write('\nprompt > ');
})