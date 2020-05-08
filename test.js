const { spawn, exec } = require('child_process');
const shell = require('shelljs');
const { v4: uuidv4 } = require('uuid');

// if (shell.exec('ssh -t pi@ "pm2 logs"').code !== 0) {
//   console.log('Something went wrong');
// } else {
//   console.log('Finished');
// }

// shell.exec('ping google.ca', (a, b, c) => {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('c', c);
// });

// const ping = spawn('ssh', ['-tt', 'pi@', `touch ${uuidv4()}`]);

// ping.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

exec(`ssh -tt pi@ "cd /opt/ && sudo touch ${uuidv4()}"`, (err, stdout, stderr) => {
  console.log('stdout:', stdout);
});
