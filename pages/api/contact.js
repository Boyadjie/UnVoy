export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 2525,
    host: "sandbox.smtp.mailtrap.io",
    auth: {
      user: 'ce55679fd48266',
      pass: 'bdedbe3f22bddc',
    },
    secure: false,
  })
  const mailData = {
    from: 'mailtrap@uncover.com',
    to: 'uncover.contact.us@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}