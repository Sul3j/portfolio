const express = require('express')
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const path = require('path');

const app = express()

dotenv.config();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

const PASSWORD = process.env.PASSWORD;

app.get('/', (req, res) => {
  res.send(`${__dirname}/public/index.html`);
})

app.post('/', function (req, res) {
  res.send(req.body)
  console.log(req.body);
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'szymonsulej1208@gmail.com',
          pass: PASSWORD
      }
  })

  const mailOptions = {
      from: req.body.email,
      to: 'szymonsulej1208@gmail.com',
      subject: `Wiadomość od ${req.body.name} na temat: ${req.body.subject}`,
      text: `
      Wiadomość od ${req.body.name}
      na temat: ${req.body.subject}
      treść wiadomości: ${req.body.message}
      email adresata: ${req.body.email}`
      
  }

  transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          console.log(error);
          res.send('error');
      }else{
          console.log('Email sent: ' + info.response)
          res.send('success')
      }
  })
})

const httpOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
}

https.createServer(httpOptions, app).listen();