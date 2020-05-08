var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const { spawn, exec } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const NodeSSH = require('node-ssh');
const ssh = new NodeSSH();

const password = '';

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// viewed at http://localhost:8080
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/exec', async function (req, res) {
  // exec('start cmd.exe');
  // res.send(['ok']);
  await ssh.connect({
    host: '',
    username: '',
    port: 22,
    password,
    tryKeyboard: true,
    onKeyboardInteractive: (name, instructions, instructionsLang, prompts, finish) => {
      if (prompts.length > 0 && prompts[0].prompt.toLowerCase().includes('password')) {
        finish([password]);
      }
    },
  });
  const { stdout } = await ssh.execCommand(`sudo touch ${uuidv4()}`);
  console.log('result', stdout);

  res.send({ output: stdout });
  // exec(`ssh -tt pi@192.168.2.78 "cd /opt/ && sudo touch ${uuidv4()}"`, (err, stdout, stderr) => {
  //   res.send({ output: stdout });
  // });
});

app.listen(3000, () => {
  console.log('Started on port http://localhost:3000');
});
