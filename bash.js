process.stdout.write('prompt > ');

// process.stdin.on('data', function (data) {
// 	var cmd = data.toString().trim();

// 	process.stdout.write('You typed: ' + cmd);
// 	process.stdout.write('\nprompt > ');

// });

process.stdin.on('data', function () {
	 
		process.stdout.write(process.cwd());
		process.stdout.write('\nprompt > ');
})

// process.stdin.on('date', function () {

// })





