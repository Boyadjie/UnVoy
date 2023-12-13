export default function (req, res) {
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 587,
    host: "live.smtp.mailtrap.io",
    auth: {
      user: 'api',
      pass: '5a6cab2e1752ab2a0fce78536b61575d',
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