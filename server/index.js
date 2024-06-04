
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv=require('dotenv');
dotenv.config();
const app = express();
const port = 5000;
const corsOptions = {
  origin: 'https://vercel-portfolio-client-side.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('REACT_APP_GMAIL_USER:', process.env.REACT_APP_GMAIL_USER);
console.log('REACT_APP_GMAIL_PASS:', process.env.REACT_APP_GMAIL_PASS);
app.post('/connect', (req, res) => {
    console.log(process.env.REACT_APP_GMAIL_USER);
    console.log(req);
  const { firstName, lastName, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    auth: {
      user: process.env.REACT_APP_GMAIL_USER,
      pass: process.env.REACT_APP_GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.REACT_APP_GMAIL_USER,
    subject: 'Contact Form Submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
